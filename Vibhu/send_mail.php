<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer
require 'vendor/autoload.php'; // If installed via Composer
// require 'PHPMailer/PHPMailerAutoload.php'; // If downloaded manually

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $phone   = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'nagarajansvs@gmail.com'; // Change for other SMTP providers
        $mail->SMTPAuth   = true;
        $mail->Username   = 'nagarajansvs@gmail.com'; // Your email
        $mail->Password   = 'Papababy@143';   // Use "App Password" for security
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Email Settings
        $mail->setFrom($email, $name);
        $mail->addAddress('nagarajansvs@gmail.com', 'Nagarajan'); // Recipient email

        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission: $subject";
        $mail->Body    = "
            <h3>Contact Details:</h3>
            <p><b>Name:</b> $name</p>
            <p><b>Email:</b> $email</p>
            <p><b>Phone:</b> $phone</p>
            <p><b>Message:</b> $message</p>
        ";

        // Send Email
        if ($mail->send()) {
            echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
        } else {
            echo "<script>alert('Error sending message.');</script>";
        }

    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Error: {$mail->ErrorInfo}');</script>";
    }
}
?>
