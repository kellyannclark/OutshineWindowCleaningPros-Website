/////////////////////////////////////////
//Function to asynchronously load an HTML template from a given path
/////////////////////////////////////////
async function loadTemplate(path) {
    const res = await fetch(path);//fetch the template content from the specified path
    if (res.ok) { //check if the operation worked
        return res.text(); //return the text content of the template if fetch worked
    }
return''; //Return an empty string if the template cannot be loaded
}

////////////////////////////////////////////
//Function to render a template into a parent element
/////////////////////////////////////////////
async function renderTemplate(templatePath, parentSelector) {
    const template = await loadTemplate(templatePath); //load the HTML template content from the specified path

    // Get the parent element using the provided selector
    const parentElement = document.querySelector(parentSelector);

// Check if both the parent element and the template content exist

    if (parentElement && template) {
        parentElement.innerHTML = template;
    }
}

////////////////////////////////////////////////
// Function to load and render header and footer
////////////////////////////////////////////////
export async function loadHeaderFooter() {
    
    // Specify the paths to header and footer templates
    const headerTemplatePath = '/partials/header.html';
    const footerTemplatePath = '/partials/footer.html';
  
    // Render header w/ parameters templatePath and parentSelector 
    await renderTemplate(headerTemplatePath, '#main-header');
  
    // Render footer w/ parameters templatePath and parentSelector 
    await renderTemplate(footerTemplatePath, '#main-footer');
  }