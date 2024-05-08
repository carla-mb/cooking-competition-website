/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/**
 * Write any other JavaScript below
 */

// Add active class to current nav item
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL path
    const path = window.location.pathname.substring(1);
    console.log('Current path:', path);

    // Find the active link in the navigation and add 'active' class
    document.querySelectorAll('.nav__link').forEach(link => {
        console.log('Link href:', link.getAttribute('href'));
        if (link.getAttribute('href') === path) {
            console.log('Adding active class to:', link);
            link.classList.add('active');
        }
    });
});

// Import animate.css to use it in the project
import 'animate.css';

// Function to generate a random hsl color
const svgElement = document.getElementById('cooking-svg');

function getRandomVibrantColor() {
    const hue = Math.floor(Math.random() * 360); 
    const saturation = Math.floor(Math.random() * 50) + 50; 
    const lightness = Math.floor(Math.random() * 30) + 50; 
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to set a random color to the SVG element
function setRandomColor() {
    const color = getRandomVibrantColor();
    svgElement.style.fill = color;
}

// Add click event listener to svg element
svgElement.addEventListener('click', setRandomColor);
const confirmationParagraph = document.getElementById('confirmation-paragraph');

// Function to toggle 'animate__swing' class and make p visible
function toggleSwingAnimation() {
    svgElement.classList.add('animate__swing');

    confirmationParagraph.style.visibility = 'visible';

    setTimeout(() => {
        svgElement.classList.remove('animate__swing');
    }, 1000);
}

// Add click event listener to svg element
svgElement.addEventListener('click', toggleSwingAnimation);