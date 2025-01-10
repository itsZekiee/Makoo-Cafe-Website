// HAMBURGER COLLAPSE
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
});

// Account Sign In - Up
const container = document.getElementById('account__container');
const registerBtn = document.getElementById('register'); // Button to switch to Sign Up
const loginBtn = document.getElementById('login'); // Button to switch to Sign In

// Event listener for the Register button
registerBtn.addEventListener('click', () => {
    container.classList.add("active"); // Add 'active' class to show Sign Up
});

// Event listener for the Login button
loginBtn.addEventListener('click', () => {
    container.classList.remove("active"); // Remove 'active' class to show Sign In
});