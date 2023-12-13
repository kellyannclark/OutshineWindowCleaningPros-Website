function submitForm(ev) {
    ev.preventDefault(); // Prevent the page from reloading

    // Ensure we have the correct form element
    let quoteForm = document.getElementById('quoteForm');

    if (!quoteForm || quoteForm.tagName !== 'FORM') {
        console.error('Form not found or is not an HTMLFormElement');
        return;
    }

    let fd;
    try {
        fd = new FormData(quoteForm); // Attempt to create FormData from the form
    } catch (error) {
        console.error('Error creating FormData:', error);
        return;
    }

    fd.append('api-key', 'myApiKey');

    for (let key of fd.keys()) {
        console.log(key, fd.get(key));
    }

    let url = 'http://localhost:5500/'; // URL to send the request
    let req = new Request(url, {
        method: 'POST',
        body: fd, // Include FormData in the request body
    });

    fetch(req)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log('Response from server');
            console.log(data);

            // Clear form fields
            quoteForm.reset();

            // Display success message (adjust as needed)
            alert('Form submitted successfully!');

            // Redirect to the home page
            window.location.href = '/'; // Adjust the URL as needed
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

export { submitForm };

