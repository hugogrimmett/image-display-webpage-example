<?php
if (isset($_GET['directory'])) {
    $directory = 'pages/' . $_GET['directory'];

    // Get list of images in the specified directory
    $images = array_diff(scandir($directory), array('..', '.'));

    // Construct an associative array with full relative paths to the images
    $imagePaths = [];
    foreach ($images as $image) {
        // Ignore files starting with "cover_" or named ".DS_Store"
        if (!preg_match('/^cover_/', $image) && $image !== '.DS_Store') {
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
