document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById("productForm"));
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // console.log("formObject",formObject);

    const apiUrl = 'http://35.231.83.234:3040/postProduct'; // Use the API endpoint you defined in your server
    const headers = {
        'Content-Type': 'application/json'
    };

    // console.log("JSON.stringify(formObject)",JSON.stringify(formObject));

    fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formObject)
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        // if (data.success) {
        //     // Redirect to another page after successful submission
        //     window.location.href = 'index.html';
        // } else {
        //     alert('Error: Submission failed');
        // }
        // You can handle the API response here
        // onclick="location.href='index.html'"
        window.location.href = '/Code/index.html'
    })
    .catch(error => {
        console.error('API Error:', error);
        // Handle errors here
    });
});
