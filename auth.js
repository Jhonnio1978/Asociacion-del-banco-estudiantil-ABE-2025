function generateUniqueId() {
    return 'user-' + Math.random().toString(36).substr(2, 9);
}

const users = [];

function registerUser(name, surname, phone, age, school, email, password, accountType) {
    const newUser = {
        id: generateUniqueId(),
        name,
        surname,
        phone,
        age,
        school,
        email,
        password,
        accountType
    };
    users.push(newUser);
    return newUser;
}

function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    return user ? user : null;
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function updateUser(id, updatedInfo) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedInfo };
        return users[userIndex];
    }
    return null;
}

function deleteUser(id) {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return true;
    }
    return false;
}