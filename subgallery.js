document.addEventListener('DOMContentLoaded', function() {
  const subgallery = document.getElementById('subgallery');
  
  // Extract directory name from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const directory = urlParams.get('directory');

  // Fetch images list from PHP endpoint
  fetch(`subgallery.php?directory=${directory}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.addEventListener('click', function() {
          // Handle click event if needed
        });
        subgallery.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching images:', error));
});
