function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    if (username === "") {
        alert("Username cannot be empty");
        return false;
    }
    if (email === "") {
        alert("Email cannot be empty");
        return false;
    }

    // Simple email format check
    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Password cannot be empty");
        return false;
    }

    // Password length check (control statement)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // If all validations pass
    alert("Login successful!");
    return true;
}