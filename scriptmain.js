 // Function to apply monochrome (black and white) effect
 function toggleLaundryEffect() {
    const shirtImage = document.getElementById('shirtImage');
    shirtImage.classList.add('monochrome'); // Add grayscale effect
  }

  // Function to remove monochrome effect (back to normal)
  function toggleWearableEffect() {
    const shirtImage = document.getElementById('shirtImage');
    shirtImage.classList.remove('monochrome'); // Remove grayscale effect
  }


// Function to toggle the red color when clicked
function changeColorToRed(event) {
    const image = event.target;  // The clicked SVG element
    image.classList.toggle('red-color');  // Toggle the red-color class
}

// Add the event listener to the group-icon SVG after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const groupIcon = document.querySelector('.group-icon'); // Get the SVG element
    if (groupIcon) {
        groupIcon.addEventListener('click', changeColorToRed); // Add click event listener
    }
});



