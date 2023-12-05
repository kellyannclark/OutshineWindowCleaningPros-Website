// main.js

import { loadHeaderFooter } from "./utils.mjs";
import { startPulseAnimation } from './freeEstimateAnimation.mjs';
import { submitForm } from './quoteForm.mjs';

// Load header and footer when the page is loaded
loadHeaderFooter();

// Select the submit button and add an event listener for the click event
const submitButton = document.querySelector('#submitBtn');
if (submitButton) {
    submitButton.addEventListener('click', submitForm);
} else {
    console.error('Submit button not found!');
}

// Start the pulse animation directly
startPulseAnimation();





