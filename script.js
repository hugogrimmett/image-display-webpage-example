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
        
        // Construct URLs for resized images
        const directory = image.directory;
        const resizedImages = {
          small: directory + '/cover_300w.jpg',
          medium: directory + '/cover_600w.jpg',
          large: directory + '/cover_900w.jpg'
        };
        
        // Set srcset attribute with resized image URLs
        img.srcset = `${resizedImages.small} 300w, ${resizedImages.medium} 600w, ${resizedImages.large} 900w`;

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
