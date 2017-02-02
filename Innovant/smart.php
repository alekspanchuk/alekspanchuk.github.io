<?php 
	$from = $_POST['from'];
	$name = $_POST['name'];
	$email = $_POST['email'];

	require_once('phpmailer/PHPMailerAutoload.php');
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'alex88temp@mail.ru';                 // SMTP username
	$mail->Password = 'Qawsedrftg';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	$mail->setFrom('alex88temp@mail.ru', 'Innovant Agency');
	$mail->addAddress($email, $name);     // Add a recipient
	//$mail->addAddress('ellen@example.com');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = "Тестовое рассылка";
	$mail->Body    = "<b>Здравствуйте, </b>: ".htmlspecialchars($name)."!<br><br>  Вы получили это письсмо, т.к. заполнили форму за сайте Innovant Agency.";
	$mail->AltBody = '';

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';
	}
?>