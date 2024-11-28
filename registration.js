document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';

    // Basic validation
    if (!firstName || !lastName || !dob || !email || !contact) {
        errorMessage.innerHTML = 'All fields are mandatory.';
        return;
    }

    if (contact.length !== 10 || isNaN(contact)) {
        errorMessage.innerHTML = 'Enter a valid contact number.';
        return;
    }

    // Generate random user ID (numeric) and password
    let randomUserId = Math.floor(Math.random() * 100000); // Random 5 digit ID
    let randomPassword = firstName.substring(0, 3) + randomUserId + "@123"; // Generate password

    // Store user data in localStorage
    let userData = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        contact: contact,
        userId: randomUserId,
        password: randomPassword
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to login page after successful registration
    alert(`Registration Successful! Your User ID: ${randomUserId}, Password: ${randomPassword}`);
    window.location.href = 'login.html';
});
