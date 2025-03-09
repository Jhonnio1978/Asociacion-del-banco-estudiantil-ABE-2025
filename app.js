// Main JavaScript file for the Asociación del Banco Estudiantil (ABE) website

// Event listener for DOMContentLoaded to initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Check the current page and set up event listeners accordingly
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'register.html') {
        setupRegistration();
    } else if (currentPage === 'login.html') {
        setupLogin();
    } else if (currentPage === 'account.html') {
        displayAccountInfo();
    }
});

// Function to set up registration form submission
function setupRegistration() {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userData = {
            name: registrationForm.name.value,
            surname: registrationForm.surname.value,
            phone: registrationForm.phone.value,
            age: registrationForm.age.value,
            school: registrationForm.school.value,
            email: registrationForm.email.value,
            password: registrationForm.password.value,
            accountType: registrationForm.accountType.value
        };
        registerUser(userData);
    });
}

// Function to set up login form submission
function setupLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userId = loginForm.userId.value;
        const password = loginForm.password.value;
        loginUser(userId, password);
    });
}

// Function to display account information
function displayAccountInfo() {
    const userId = localStorage.getItem('userId');
    const user = getUserById(userId);
    if (user) {
        document.getElementById('userId').innerText = `User ID: ${user.id}`;
        document.getElementById('userName').innerText = `Name: ${user.name} ${user.surname}`;
        // Additional user info can be displayed here
    }
}

// Function to register a new user
function registerUser(userData) {
    const userId = addUser(userData);
    if (userId) {
        alert('Registration successful! Your user ID is ' + userId);
        window.location.href = 'login.html';
    } else {
        alert('Registration failed. Please try again.');
    }
}

// Function to log in a user
function loginUser(userId, password) {
    const user = authenticateUser(userId, password);
    if (user) {
        localStorage.setItem('userId', user.id);
        window.location.href = 'account.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}