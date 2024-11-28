document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let userId = document.getElementById('userId').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = ''; // Reset previous error messages

    // Retrieve the user data from localStorage
    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists in localStorage
    if (!storedUserData) {
        errorMessage.innerHTML = 'No user data found. Please register first.';
        return;
    }

    // Validate UserId and Password
    if (userId == storedUserData.userId && password == storedUserData.password) {
        localStorage.setItem('isLoggedIn', 'true'); // Set login status
        window.location.href = 'home.html'; // Redirect to Home Page
    } else {
        errorMessage.innerHTML = 'Invalid credentials. Please try again.';
    }
});
