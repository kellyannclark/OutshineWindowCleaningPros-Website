// main.js

import { loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();



import { submitForm } from './quoteForm.mjs';

const submitButton = document.querySelector('#submitBtn');  // Use the id "submitBtn" to select the button
if (submitButton) {                                         // Check if the button is found before adding the event listener
    submitButton.addEventListener('click', submitForm);
} else {
    console.error('Submit button not found!');
}

//This function is listening for the submit button to be clicked
//When it is clicked, then it passes to the submitForm function w/i the quoteForm.mjs