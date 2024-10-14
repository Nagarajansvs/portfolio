<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure you include Composer's autoloader

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Set the SMTP server to send through
        $mail->SMTPAuth   = true;
        $mail->Username   = 'thirunavukarasu.besant@gmail.com'; // SMTP username
        $mail->Password   = 'qbxmwarxmvgnpmin'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption
        $mail->Port       = 587; // TCP port to connect to

        //Recipients
        $mail->setFrom('your_email@example.com', 'Mailer');
        $mail->addAddress($to); // Add a recipient

        // Content
        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = nl2br($message); // Convert line breaks to HTML
        $mail->AltBody = $message; // Plain text version of the email

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
