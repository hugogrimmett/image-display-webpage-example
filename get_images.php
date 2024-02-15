<?php
$imagesDirectory = 'images';

$images = [];

// Get list of subdirectories in the images directory
$subdirectories = array_diff(scandir($imagesDirectory), array('..', '.'));

// Loop through subdirectories
foreach ($subdirectories as $subdirectory) {
    $thumbnailPath = $imagesDirectory . '/' . $subdirectory . '/cover.jpg';
    if (is_file($thumbnailPath)) {
        $images[] = [
            'thumbnail' => $thumbnailPath,
            'directory' => $subdirectory
        ];
    }
}

header('Content-Type: application/json');
echo json_encode($images);
?>
