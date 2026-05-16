<?php

$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$guests = $_POST['guests'];
$message = $_POST['message'];

/* WHERE EMAIL GOES */

$to = "gekko.sushi1@gmail.com";

/* SUBJECT */

$subject = "NEW ROYAL CATERING ORDER";

/* MESSAGE */

$body = "

NEW ORDER

Full Name: $fullname

Phone: $phone

Email: $email

Guests: $guests

Message:
$message

";

/* HEADERS */

$headers = "From: noreply@yourwebsite.com";

/* SEND */

mail($to,$subject,$body,$headers);

/* SUCCESS */

header("Location: success.html");

?>