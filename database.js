const users = [];

function addUser(name, surname, phone, age, school, email, password, accountType) {
    const userId = users.length + 1;
    const newUser = {
        id: userId,
        name: name,
        surname: surname,
        phone: phone,
        age: age,
        school: school,
        email: email,
        password: password,
        accountType: accountType
    };
    users.push(newUser);
    return newUser;
}

function getUserByEmail(email) {
    return users.find(user => user.email === email);
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function getAllUsers() {
    return users;
}

// Exporting functions for use in other modules
export { addUser, getUserByEmail, getUserById, getAllUsers };