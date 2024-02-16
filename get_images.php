<?php
$imagesDirectory = 'pages';

$images = [];

// Get list of subdirectories in the images directory
$subdirectories = array_diff(scandir($imagesDirectory), array('..', '.'));

// Loop through subdirectories
foreach ($subdirectories as $subdirectory) {
    // Define paths for resized images
    $smallImagePath = $imagesDirectory . '/' . $subdirectory . '/cover_300w.jpg';
    $mediumImagePath = $imagesDirectory . '/' . $subdirectory . '/cover_600w.jpg';
    $largeImagePath = $imagesDirectory . '/' . $subdirectory . '/cover_900w.jpg';
    
    // Check if resized images exist
    if (is_file($smallImagePath) && is_file($mediumImagePath) && is_file($largeImagePath)) {
        $images[] = [
            'thumbnail' => $smallImagePath, // Use small image as thumbnail
            'small' => $smallImagePath, // URL for small image
            'medium' => $mediumImagePath, // URL for medium image
            'large' => $largeImagePath, // URL for large image
            'directory' => $subdirectory
        ];
    }
}

header('Content-Type: application/json');
echo json_encode($images);
?>