document.addEventListener('DOMContentLoaded', function () {
    let userGreeting = document.getElementById('userGreeting');
    let profileForm = document.getElementById('profileForm');
    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if user is logged in
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html'; // Redirect to login if not logged in
        return;
    }

    // Display user details from localStorage (including userId and password)
    document.getElementById('firstName').value = storedUserData.firstName;
    document.getElementById('lastName').value = storedUserData.lastName;
    document.getElementById('dob').value = storedUserData.dob;
    document.getElementById('email').value = storedUserData.email;
    document.getElementById('contact').value = storedUserData.contact;

    // Don't show userId and password as they are not editable by the user
    document.getElementById('userId').value = storedUserData.userId;
    document.getElementById('password').value = storedUserData.password;

    // Greet the user with their first name
    userGreeting.textContent = `Welcome, ${storedUserData.firstName}!`;

    // Enable editing when "Edit" button is clicked
    document.getElementById('editProfile').addEventListener('click', function () {
        let formElements = document.querySelectorAll('#profileForm input');
        formElements.forEach(input => {
            // Only allow editing non-sensitive fields (not userId and password)
            if (input.id !== 'userId' && input.id !== 'password') {
                input.disabled = false;
            }
        });
        document.getElementById('saveProfile').disabled = false;
        document.getElementById('editProfile').disabled = true;
    });

    // Save edited profile to localStorage
    document.getElementById('profileForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the updated values (including userId and password)
        let updatedUserData = {
            userId: storedUserData.userId,  // Keep userId and password the same
            password: storedUserData.password,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            dob: document.getElementById('dob').value,
            email: document.getElementById('email').value,
            contact: document.getElementById('contact').value
        };

        // Save the updated data to localStorage
        localStorage.setItem('userData', JSON.stringify(updatedUserData));

        // Show a success message
        alert('Profile updated successfully!');

        // Disable inputs again and hide the Save button
        document.querySelectorAll('#profileForm input').forEach(input => input.disabled = true);
        document.getElementById('saveProfile').disabled = true;
        document.getElementById('editProfile').disabled = false;
    });
});
