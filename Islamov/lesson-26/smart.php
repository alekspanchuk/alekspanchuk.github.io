<?php 
	$from = $_POST['from'];
	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];

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

	$mail->setFrom('alex88temp@mail.ru', 'User');
	$mail->addAddress('alekspanchuk@yandex.ru', 'Alex Panchuk');     // Add a recipient
	//$mail->addAddress('ellen@example.com');               // Name is optional
	//$mail->addReplyTo('info@example.com', 'Information');
	//$mail->addCC('cc@example.com');
	//$mail->addBCC('bcc@example.com');
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = "Сообщение с сайт homework.sl";
	$mail->Body    = "<b>От пользователя</b>: ".htmlspecialchars($name)."<br>
	<b>Email</b>: ".htmlspecialchars($email)."<br><br><b>Сообщение</b>:<br><br>".htmlspecialchars($text);
	$mail->AltBody = '';

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';
	}
?>