#!/bin/bash

# Get sorted list of tags, excluding alpha versions (macOS-compatible)
TAGS=$(git tag | grep -vE ".*-alpha.*" | sort -V)

# Convert tags into an array
TAG_ARRAY=($TAGS)
NUM_TAGS=${#TAG_ARRAY[@]}

# Loop through each consecutive pair of tags
for ((i = 1; i < NUM_TAGS; i++)); do
    OLD_TAG=${TAG_ARRAY[i-1]}
    NEW_TAG=${TAG_ARRAY[i]}

    echo "Generating release notes from $OLD_TAG to $NEW_TAG..."

    ./generate_release_notes.sh "$OLD_TAG" "$NEW_TAG"
done

bash  ./generate_release-notes_index.sh