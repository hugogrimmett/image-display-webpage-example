document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  
  // Fetch images list from PHP endpoint
  fetch('get_images.php')
    .then(response => response.json())
    .then(data => {
      data.forEach(image => {
        const img = document.createElement('img');
        img.src = image.thumbnail;
        img.dataset.directory = image.directory;
        img.addEventListener('click', function() {
          window.location.href = 'subgallery.html?directory=' + encodeURIComponent(image.directory);
        });
        gallery.appendChild(img);
      });
      // Lazy load images
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => {
        img.src = img.dataset.src; // Set the 'src' attribute to trigger lazy loading
        img.removeAttribute('data-src'); // Remove 'data-src' attribute
      });
    })
    .catch(error => console.error('Error fetching images:', error));
});
