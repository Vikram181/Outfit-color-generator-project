const shirtColors = ['White', 'Black', '#000435', 'Gray', 'Red', 'Green', 'Pink', '#FFFF00', '#A020F0', 'Brown', 
    'Beige', 'Maroon', 'Orange', 'Teal', 'Turquoise', '#800020', '#FFDB58', 'Lavender', 
    '#3EB489', 'Coral', 'Khaki', 'Magenta', '#87CEEB', '#36454F', '#FFE5B4'];

const pantColorsMapping = {
    'White': ['Black', '#aedb9f', 'Gray','#000435', '#87CEEB'],
    'Black': ['Gray', 'Black', '#000435','White','#F5F5DC'],
    '#000435': ['Gray', 'Black', 'White','#CDB38A'],
    'Gray': ['Black', 'White', '#000435'],
    'Red': ['Black', '#CDB38A', 'Gray'],
    'Green': ['Black' , 'Gray'],
    '#FFFF00': ['Black', '#000435'],
    'Pink': ['Gray', 'Black', 'White','#000435','#CDB38A'],
    
    '#A020F0': ['Black', 'Beige', 'Gray','White'],
    'Brown': ['Black', 'White' ],
    'Beige': ['Black',],
    'Maroon': ['Gray', 'White', 'Black','Beige'],


    'Orange': ['Black'],
    'Teal': ['Gray', 'Black', 'White'], 
    'Turquoise': ['Black', 'Gray', 'White','Beige'],
    '#800020': ['Black', 'Tan', 'Gray'],
    '#FFDB58': ['Black', 'Gray', '#000435'],
    'Lavender': ['Gray', 'White', 'Black','Beige'],
    '#3EB489': ['Black', 'White', 'Gray'],
    'Coral': ['Black', 'White', 'Gray'],
    'Khaki': ['Dark Green', 'Charcoal', 'Black'],
    'Magenta': ['Black', 'White', 'Gray','Beige'],
    '#87CEEB': ['#000435', 'Gray', 'Black','Beige','White'],
    '#36454F': ['Black', 'White',],
    '#FFE5B4': ['Black', 'White', 'Gray'],

};

const shirtPalette = document.getElementById('shirtPalette');
const pantPalette = document.getElementById('pantPalette');

// Create color palette for shirts and pants
function createPalette(paletteElement, colors, label) {
    const paletteHeader = document.createElement('h3');
    paletteHeader.textContent = label;
    paletteElement.appendChild(paletteHeader);

    colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color.toLowerCase();
        swatch.setAttribute('data-color', color);
        
        // Add click event to allow selection
        swatch.addEventListener('click', () => {
            swatch.classList.toggle('selected');
            // Update the pant palette when a shirt is selected
            if (paletteElement === shirtPalette) {
                updatePantPalette();
            }
        });
        paletteElement.appendChild(swatch);
    });
}

createPalette(shirtPalette, shirtColors, "Shirt Palette");

// Function to update pant palette based on selected shirt color
function updatePantPalette() {
    // Clear the existing pant palette
    while (pantPalette.firstChild) {
        pantPalette.removeChild(pantPalette.firstChild);
    }

    // Get selected shirt colors
    const selectedShirtColors = Array.from(document.querySelectorAll('#shirtPalette .color-swatch.selected')).map(swatch => swatch.getAttribute('data-color'));

    if (selectedShirtColors.length > 0) {
        // Use the first selected shirt color to filter available pants
        const availablePants = pantColorsMapping[selectedShirtColors[0]] || [];
        createPalette(pantPalette, availablePants, "Pant Palette");
    } else {
        createPalette(pantPalette, [], "Pant Palette");
    }
}

// Function to generate random color combination
function generateCombination() {
    const selectedShirtColors = Array.from(document.querySelectorAll('#shirtPalette .color-swatch.selected')).map(swatch => swatch.getAttribute('data-color'));
    const selectedPantColors = Array.from(document.querySelectorAll('#pantPalette .color-swatch.selected')).map(swatch => swatch.getAttribute('data-color'));

    if (selectedShirtColors.length > 0 && selectedPantColors.length > 0) {
        // Randomly select a shirt color from the selected shirt colors
        const randomShirtColor = selectedShirtColors[Math.floor(Math.random() * selectedShirtColors.length)];
        
        // Randomly select a pant color from the selected pant colors
        const randomPantColor = selectedPantColors[Math.floor(Math.random() * selectedPantColors.length)];

        // Update the displays with the selected colors
        document.getElementById('shirtColorDisplay').style.backgroundColor = randomShirtColor.toLowerCase();
        document.getElementById('shirtColorDisplay').textContent = randomShirtColor;

        document.getElementById('pantColorDisplay').style.backgroundColor = randomPantColor.toLowerCase();
        document.getElementById('pantColorDisplay').textContent = randomPantColor;
    } else {
        alert('Please select at least one shirt color and one pant color!');
    }
}

// Event listener for button
document.getElementById('generateBtn').addEventListener('click', generateCombination);

// Initialize the pant palette with no colors at the beginning
createPalette(pantPalette, [], "Pant Palette");
