document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  
  // Fetch images list from PHP endpoint
  fetch('get_images.php')
    .then(response => response.json())
    .then(data => {
      data.forEach(image => {
        const img = document.createElement('img');
        
        // Set the thumbnail as the initial source
        img.src = image.thumbnail;
        
        // Set dataset for directory
        img.dataset.directory = image.directory;
        
        // Construct srcset attribute using resized image URLs
        const srcset = `${image.small} 300w, ${image.medium} 600w, ${image.large} 900w`;
        img.srcset = srcset;

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
