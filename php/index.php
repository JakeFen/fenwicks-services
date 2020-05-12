<?php

if (isset($_POST["submit"])) {
    $name = $_POST['home-fullname'];
    $mailFrom = $_POST['home-email'];
    $subject = $_POST['home-subject'];
    $message = $_POST['home-message'];

    $mailTo = "atlnkar@yahoo.com";
    $headers = "From: ".$mailFrom;
    $txt = "Website \n\n".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>