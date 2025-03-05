#!/bin/bash

RELEASE_NOTES_DIR="../../packages/docs-website/src/assets/release-notes"
INDEX_FILE="$RELEASE_NOTES_DIR/index.json"

ABS_INDEX_FILE=$(cd "$(dirname "$INDEX_FILE")" && pwd)/$(basename "$INDEX_FILE")
echo "[DEBUG] Absolute path of index.json: $ABS_INDEX_FILE"

mkdir -p "$RELEASE_NOTES_DIR"

if [ ! -s "$INDEX_FILE" ]; then
    echo "[]" > "$INDEX_FILE"
    echo "[DEBUG] index.json initialized as an empty array"
fi

update_index_json() {
    echo "[DEBUG] Updating index.json with the new files"
    
    files=$(ls "$RELEASE_NOTES_DIR" | grep -E "^RELEASE_NOTES_.*\.md$")
    echo "[DEBUG] Found the following files: $files"

    new_files=()
    for file in $files; do
        new_files+=("\"$file\"")
    done
    
    if [ ${#new_files[@]} -eq 0 ]; then
        echo "[DEBUG] No release notes files found"
        return
    fi

    new_index="["
    for ((i=0; i<${#new_files[@]}; i++)); do
        if [ $i -ne 0 ]; then
            new_index+=","
        fi
        new_index+=$'\n'"    ${new_files[$i]}"
    done
    new_index+=$'\n]'

    echo "$new_index" > "$INDEX_FILE"
    echo "[DEBUG] index.json updated with the new files"
}

update_index_json

echo "✅ Done! index.json updated."
