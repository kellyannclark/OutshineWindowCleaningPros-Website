// main.js

import { loadHeaderFooter } from "./utils.mjs";
import { phoneNumberPulse } from './phoneNumberPulse.mjs';
import { submitForm } from './quoteForm.mjs';
import { fetchWeather } from "./weatherApi.mjs";

// Load header and footer when the page is loaded
loadHeaderFooter();

// Select the submit button and add an event listener for the click event
const submitButton = document.querySelector('#submitBtn');
if (submitButton) {
    submitButton.addEventListener('click', (ev) => {
        // Call the submitForm function for form submission
        submitForm(ev);

    });
} else {
    console.error('Submit button not found!');
}

// Use an event listener to initiate the pulse animation after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start the pulse animation directly
    phoneNumberPulse();
});

//Load fetchWeather
fetchWeather();







