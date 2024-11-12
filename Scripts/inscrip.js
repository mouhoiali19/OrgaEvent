const params = new URLSearchParams(window.location.search);

// Retrieve the `username` and `password` values
const username = params.get('username');
const password = params.get('password');

// Display the values or use them as needed
console.log("Username:", username);
console.log("Password:", password);

// Example: Show the username in an HTML element
document.querySelector('.username-display').textContent = username;
document.querySelector('.password-display').textContent = password;