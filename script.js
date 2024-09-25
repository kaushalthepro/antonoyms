document.addEventListener('DOMContentLoaded', () => {
    // Load saved username and password from localStorage
    const savedUsername = localStorage.getItem('Email or Phone Number');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername) {
        document.getElementById('Email or Phone Number').value = savedUsername;
    }
    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
});

document.getElementById('saveButton').addEventListener('click', () => {
    // Save username and password to localStorage
    const username = document.getElementById('Email or Phone Number').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('Email or Phone Number', username);
    localStorage.setItem('password', password);

    // Show a message indicating that the credentials have been saved
    document.getElementById('statusMessage').textContent = 'Credentials saved!';
});
