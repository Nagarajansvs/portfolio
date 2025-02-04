<?php

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Use your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'nagarajansvs@gmail.com'; // Your email
    $mail->Password = 'your-password'; // Your email password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('nagarajansvs@gmail.com', 'Vibhu Health Care');
    // vibhuhc@gmail.com
    $mail->addAddress('recipient@example.com');

    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body    = 'Hello, this is a test email from PHPMailer!';

    $mail->send();
    echo 'Email has been sent successfully!';
} catch (Exception $e) {
    echo "Email sending failed: {$mail->ErrorInfo}";
}


?>



