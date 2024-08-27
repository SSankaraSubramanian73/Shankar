document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple username and password validation (for demonstration purposes)
    if (username === 'admin' && password === 'password123') {
        // Redirect to a different page if credentials are correct
        console.log(window.location.href);
        window.location.href = 'ecom.html';
    } else {
        // Display an error message or handle invalid credentials
        alert('Invalid username or password.');
    }
});
