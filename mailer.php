<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

$secret = '6LfkwYgUAAAAAGR1zeiNhqDSuZQ7s21k8V7M3Xhu';
$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
$responseData = json_decode($verifyResponse);

if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {
    
    try {
        //Server settings
        //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'mail.blacknight.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'contact@rafahell.com';                 // SMTP username
        $mail->Password = '20SweetHome';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];


        //Recipients
        $mail->setFrom('contact@rafahell.com', 'Rafahell Website');
        $mail->addAddress('220rrs@gmail.com', 'Rafaels Email');     // Add a recipient
        $mail->addReplyTo('contact@rafahell.com', 'Reply');

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = '*NEW* email from rafahell.com';
        $mail->Body    = "From: $name<br> E-Mail: $email<br> Message: $message";
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo "<script type='text/javascript'>
                $('#submit_form').hide();
                $('#alert_success').show();
            </script>";
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }


} else {
    //false
    echo "<script type='text/javascript'>
        window.history.back();
        $('#alert_error').find('.alert-message.error').show();
    </script>";	
}



?>

