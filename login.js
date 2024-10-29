// Validate form function
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessage.innerHTML = "";

    // Basic form validation: Check if both fields are filled
    if (username === "" || password === "") {
        errorMessage.innerHTML = "Both username and password are required.";
        errorMessage.style.color = "red";
        return false;  // Prevent form submission
    }

    // Optional: Add additional validation rules here, like password length, etc.

    // Simulate form submission (for demo purposes)
    alert(`Login Successful!\nUsername: ${username}`);
    return false; // Prevent actual form submission for now (for demo purposes)
}

// Toggle password visibility function
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById("password");
    const toggleIcon = this.querySelector('i');

    // Toggle between text and password
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash'); // Switch icon
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye'); // Switch icon
    }
});

// Handle Google credential response
function handleCredentialResponse(response) {
    // Decode the ID token to get the user information
    const responsePayload = parseJwt(response.credential);
    
    console.log("ID: " + responsePayload.sub);
    console.log("Full Name: " + responsePayload.name);
    console.log("Given Name: " + responsePayload.given_name);
    console.log("Family Name: " + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    // Here, you can send the token or user info to your server for further validation.
}

// Helper function to parse JWT token
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
// Function to toggle password visibility

 function togglePassword() {
        const passwordInput = document.getElementById('password');
        const passwordToggleIcon = document.querySelector('.toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggleIcon.src = 'https://static.vecteezy.com/system/resources/thumbnails/006/086/018/small/preview-show-interface-icon-free-vector.jpg'; // Change to hide icon
        } else {
            passwordInput.type = 'password';
            passwordToggleIcon.src = 'https://static.thenounproject.com/png/506282-200.png'; // Change to show icon
        }
    }

// Validate form function
function validateForm() {
    const username = document.getElementById("username").value;
    const contactNumber = document.getElementById("contact-number").value;
    const countryCode = document.getElementById("country-code").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessage.innerHTML = "";

    // Basic form validation: Check if all fields are filled
    if (username === "" || contactNumber === "" || password === "") {
        errorMessage.innerHTML = "All fields are required.";
        errorMessage.style.color = "red";
        return false;  // Prevent form submission
    }

    // Display the full phone number with country code for demo purposes
    alert(`Login Successful!\nUsername: ${username}\nPhone: ${countryCode} ${contactNumber}`);

    return false; // Prevent actual form submission for now (for demo purposes)
}
