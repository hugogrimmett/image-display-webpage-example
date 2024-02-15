<?php
if (isset($_GET['directory'])) {
    $directory = 'images/' . $_GET['directory'];

    // Get list of images in the specified directory
    $images = array_diff(scandir($directory), array('..', '.'));

    // Construct an associative array with full relative paths to the images
    $imagePaths = [];
    foreach ($images as $image) {
        // Ignore non-image files
        $extension = strtolower(pathinfo($image, PATHINFO_EXTENSION));
        if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif'])) {
            $imagePaths[] = $directory . '/' . $image;
        }
    }

    // Output image paths as JSON
    header('Content-Type: application/json');
    echo json_encode($imagePaths);
} else {
    echo 'Directory not specified.';
}
?>
