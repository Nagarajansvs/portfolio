<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;



//$mail->SMTPDebug = 4;   
                            // Enable verbose debug output

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $budget= $_POST['budget'];
    $description = $_POST['description'];
    
    if(!empty($_POST['pcat'])){
       $ids = array(); 
        foreach ($_POST['pcat'] as $cat)  
        {
            $ids[] = $cat; 
        } 
        $categories = implode(", ", $ids);
    }else{
        $categories ='';
    }
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'thirunavukarasu.besant@gmail.com';                 // SMTP username
    $mail->Password = 'qbxmwarxmvgnpmin';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, ssl also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    $mail->setFrom($email, $fname.'-'.$lname);
    $mail->addAddress('nagarajansvs@gmail.com', 'Nagarajansvs');  
    // Add a recipient

    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = "Contact Us";
    $mail->Body    = 'First Name :'.$fname.'<br>'.'Last Name :'.$lname.'<br>'.'Contact :'.$mobile.'<br>'.'Email:'.$email.'<br>'.'Budget:'.$budget.'<br>'.'Description:'.$description.'<br>'.'Service Category:'.$categories;

    if(!$mail->send()) {
        $_SESSION['message'] = 'failed';
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
        header('Location: ' . $_SERVER['HTTP_REFERER']);
        exit;
    } else {
        // echo 'Message has been sent';
        $_SESSION['message'] = 'success';
        header('Location: ' . $_SERVER['HTTP_REFERER']);
        // exit;
    }
    header('Location: ' . $_SERVER['HTTP_REFERER']);

   
   ?>