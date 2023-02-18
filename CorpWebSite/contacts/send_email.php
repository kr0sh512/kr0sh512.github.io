<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $question = $_POST['question'];
    $recipient1 = 'sergey.maslov58@yandex.ru';
    $recipient2 = 'vika_gudova87@mail.ru';

    $subject = 'Заявка на сайте maslov58.ru';
    $message = "Имя: $name\nТелефон: $phone\nEmail: $email\nСообщение:\n$question";
    $headers = 'From: webmaster@maslov58.ru' . "\r\n" .
               'Reply-To: webmaster@maslov58.ru' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    mail($recipient1, $subject, $message, $headers);
    mail($recipient2, $subject, $message, $headers);
?>