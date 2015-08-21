<?php
$name = $_POST['name'];
$comment = $_POST['comment'];

$recipient = "belckyb@gmail.com";
$subject = "PHP Email Practice";
$message = "From: $name \n\t$comment";

mail($recipient,$subject,$message);
echo "$name $comment";
echo "THANKS A BUNCH!";
//<meta http-equiv="refresh" content="3;file:///C:/Users/Belcky/Documents/Webdesign/Bard%20Studios/contact.html">

?>