<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $question = $_POST['question'];
    $recipient = 'sergey.maslov58@yandex.ru';

    $subject = 'Заявка на сайте';
    $message = "Name: $name\nPhone: $phone\nEmail: $email\nQuestion:\n$question";
    $headers = 'From: webmaster@maslov58.ru' . "\r\n" .
               'Reply-To: webmaster@maslov58.ru' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($recipient, $subject, $message, $headers);
?>