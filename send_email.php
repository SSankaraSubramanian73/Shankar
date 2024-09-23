<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "sankarasubramanian73@gmail.com"; // Replace with your email address
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    $email_subject = "New Message from: $name - $subject";
    $email_body = "You have received a new message.\n\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Subject: $subject\n".
                  "Message:\n$message\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending your message.";
    }
}
?>