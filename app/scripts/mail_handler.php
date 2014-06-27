<?php 
if(isset($_POST['submit'])){
    $to = "benjamin.duvivier@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you we will contact you shortly.";
    }
?>