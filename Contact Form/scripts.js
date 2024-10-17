document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        let valid = true;

        // Name validation
        if (name.length < 5) {
            document.getElementById('nameError').innerText = "Name must be at least 5 characters.";
            valid = false;
        } else {
            document.getElementById('nameError').innerText = "";
        }

        // Email validation
        if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('emailError').innerText = "Please enter a valid email.";
            valid = false;
        } else {
            document.getElementById('emailError').innerText = "";
        }

        // Message validation
        if (message.length < 40) {
            document.getElementById('messageError').innerText = "Message must be at least 40 characters.";
            valid = false;
        } else {
            document.getElementById('messageError').innerText = "";
        }

        if (valid) {
            // Send data to server via fetch API (replace with your server endpoint)
            const apiEndpoint = "https://your-server-endpoint.com/sendmail"; // Update this URL

            fetch(apiEndpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('responseMessage').innerHTML = `<p>${data.message}</p>`;
                contactForm.reset(); // Reset form after submission
            })
            .catch(error => {
                console.error("Error:", error);
                document.getElementById('responseMessage').innerHTML = `<p>Error submitting the form. Please try again later.</p>`;
            });
        }
    });
});