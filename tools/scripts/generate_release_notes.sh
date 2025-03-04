#!/bin/bash

# Check if correct arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <older-tag> <newer-tag>"
    exit 1
fi

OLD_TAG=$1
NEW_TAG=$2
REPO_URL="https://git.clarivate.io/projects/CDXN/repos/cdx-next"
OUTPUT_FILE="../../packages/docs-website/src/assets/release-notes/RELEASE_NOTES_${NEW_TAG}.md"

echo "Generating release notes from $OLD_TAG to $NEW_TAG..."

# Get commit messages with hashes, filtering out release commits
COMMITS=$(git log --pretty=format:"%H|%s" "$OLD_TAG..$NEW_TAG" | grep -v "chore(workspace): release")

# Create a temporary file
TMP_FILE=$(mktemp)

# Function to get emoji based on commit type
get_emoji() {
    case "$1" in
        feat) echo "✨";;
        fix) echo "🐛";;
        chore) echo "🛠";;
        refactor) echo "♻️";;
        perf) echo "⚡";;
        test) echo "✅";;
        docs) echo "📝";;
        style) echo "🎨";;
        ci) echo "🔄";;
        build) echo "🏗";;
        revert) echo "⏪";;
        bugfix) echo "🐞";;
        feature) echo "🚀";;
        other) echo "📌";;
        *) echo "📌";;
    esac
}

# Process commits and extract component, type, and hash
while IFS= read -r line; do
    commit_hash=$(echo "$line" | cut -d'|' -f1)
    commit_message=$(echo "$line" | cut -d'|' -f2-)

    # Extract component (inside parentheses)
    component=$(echo "$commit_message" | grep -oE "\([a-zA-Z0-9_-]+\)" | tr -d '()')

    # Extract commit type (before `:`)
    type=$(echo "$commit_message" | awk -F':' '{print $1}' | grep -oE "^[a-zA-Z0-9_-]+")

    # Remove commit type (e.g., "feat: ") and component (e.g., "(theme-angular-material)")
    clean_message=$(echo "$commit_message" | sed -E "s/^[a-zA-Z0-9_-]+\([a-zA-Z0-9_-]+\): //")

    # Default values if not found
    [ -z "$component" ] && component="Miscellaneous"
    [ -z "$type" ] && type="other"

    # Get emoji for the commit type
    emoji=$(get_emoji "$type")

    # Format commit message as a Markdown link
    commit_entry="- $emoji [$clean_message]($REPO_URL/commits/$commit_hash)"

    echo "$component|$type|$commit_entry" >> "$TMP_FILE"
done <<< "$COMMITS"

# Write to output file
echo "# Release Notes for $NEW_TAG" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Sort and group by component and commit type
awk -F "|" '
{
    key = $1 "|" $2   # Combine component and type as a unique key
    commits[key] = commits[key] "\n" $3
    components[$1] = 1  # Store unique components
    types[$2] = 1       # Store unique commit types
}
END {
    for (comp in components) {
        print "## " comp "\n"
        for (typ in types) {
            key = comp "|" typ
            if (commits[key] != "") {
                print "### " typ "\n" commits[key] "\n"
            }
        }
    }
}' "$TMP_FILE" >> "$OUTPUT_FILE"

rm "$TMP_FILE"

echo "Release notes saved to $OUTPUT_FILE"
