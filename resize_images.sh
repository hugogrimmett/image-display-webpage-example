#!/bin/bash

# Get the current directory of the script
directory="$PWD/pages"

# Find all files named cover.jpg recursively
find "$directory" -type f -name "cover.jpg" | while read -r file; do
    # Extract the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")
    
    # Define the output filename for the resized image
    output_file="${dir}/cover_300w.jpg"
    
    # Use ImageMagick's convert command to resize the image to 300px wide
    convert "$file" -resize 300x "$output_file"

    # Output status message
    echo "Resized $file to $output_file"

    # Define the output filename for the resized image
    output_file="${dir}/cover_600w.jpg"
    
    # Use ImageMagick's convert command to resize the image to 300px wide
    convert "$file" -resize 600x "$output_file"

    # Output status message
    echo "Resized $file to $output_file"

    # Define the output filename for the resized image
    output_file="${dir}/cover_900w.jpg"
    
    # Use ImageMagick's convert command to resize the image to 300px wide
    convert "$file" -resize 900x "$output_file"

    # Output status message
    echo "Resized $file to $output_file"


done