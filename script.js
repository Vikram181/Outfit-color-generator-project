// Select all the images in the carousel
const images = document.querySelectorAll('.component-1-icon');
let currentIndex = 0;
const totalImages = images.length;

// Function to change the active image
function showNextImage() {
  // Hide the current image
  images[currentIndex].classList.remove('active');

  // Calculate the index of the next image
  currentIndex = (currentIndex + 1) % totalImages;

  // Show the next image
  images[currentIndex].classList.add('active');
}

// Set the first image as active initially
images[currentIndex].classList.add('active');

// Change the image every 5 seconds (5000 milliseconds)
setInterval(showNextImage, 3000);
