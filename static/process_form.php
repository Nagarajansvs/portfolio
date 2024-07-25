<?php
// Validate the form fields
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contact = $_POST["contact"];
    $password = $_POST["password"];

    $errors = array();

    // Validate contact number (must be numeric and 10 digits)
    if (!preg_match("/^[0-9]{10}$/", $contact)) {
        $errors[] = "Contact number should be a 10-digit number.";
    }

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address.";
    }

    // Validate password (must be at least 6 characters long)
    if (strlen($password) < 6) {
        $errors[] = "Password should be at least 6 characters long.";
    }

    // If there are no errors, proceed with registration
    if (empty($errors)) {
        // Perform the registration logic here

        // For example, you can print a success message without displaying the password
        echo "Registration successful!<br>";
        echo "Name: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Contact Number: " . $contact . "<br>";
    } else {
        // Display the validation errors
        foreach ($errors as $error) {
            echo '<p class="error">' . $error . '</p>';
        }
    }
}
?>