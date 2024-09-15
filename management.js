// Define the function to check access
function checkAccess() {
    // Get the role and age from the input fields
    const role = document.getElementById("role").value.toLowerCase();
    const age = parseInt(document.getElementById("age").value, 10);
    const accessMessageElement = document.getElementById('accessMessage');

    // Define default values
    let accessMessage = "Welcome";
    let messageClass = "no-access"; // Default class in case access is denied

    // Validate age input
    if (isNaN(age) || age < 18) {
        accessMessage = "Access denied. You must be 18 years or older.";
        messageClass = "no-access";
    } else {
        // Determine access level using if-else (and, or) statements
        if (role === "admin" || role === "moderator") {
            accessMessage = "You have full access.";
            messageClass = 'full-access';
        } else if (role === "member") {
            accessMessage = "You have access to member content.";
            messageClass = "member-access";
        } else if (role === "guest") {
            accessMessage = "You have access to guest content.";
            messageClass = "guest-access";
        } else {
            accessMessage = "Access denied. Role not recognized.";
            messageClass = "no-access";
        }
    }

    // Set the message and class
    accessMessageElement.textContent = accessMessage;
    accessMessageElement.className = messageClass;
}

// Add an event listener to the button
document.getElementById("checkAccessBtn").addEventListener('click', checkAccess);
