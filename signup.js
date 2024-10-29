document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match!";
        messageDiv.style.color = "red";
        return;
    }

    // Simulate a successful signup
    messageDiv.textContent = "Sign-up successful! Welcome, " + name + "!";
    messageDiv.style.color = "green";

    // Here, you can add code to send data to the server
});

// Toggle password visibility
const togglePassword = (toggleId, passwordId) => {
    const toggle = document.getElementById(toggleId);
    const passwordInput = document.getElementById(passwordId);
    
    toggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        toggle.src = type === 'password' 
            ? 'https://img.icons8.com/material-outlined/24/000000/invisible.png' 
            : 'https://img.icons8.com/material-outlined/24/000000/visible.png';
    });
};

togglePassword('togglePassword', 'password');
togglePassword('toggleConfirmPassword', 'confirmPassword');


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