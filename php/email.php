<?php
if(isset($_POST['nome'])){
	$to = "fedefrasca25@hotmail.it"; // this is your Email address
	
	$from = $_POST['email']; // this is the sender's Email address
	$first_name = $_POST['nome'];

	$subject = "Richiesta informazioni dal sito Federico Frasca Polara"; //OGGETTO
	
	$message = " Il cliente ".$first_name . " ha inviato il seguente messaggio:" . "\n\n" . $_POST['mex']."\n\n";
	
	if(isset($_POST['tel'])){

	$message=$message. "telefono:".$_POST['tel']."";
			
	}
	//$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

	$headers = "From:" . $from;
	
	if(mail($to,$subject,$message,$headers))
	{
	
	echo ("ok");

	}
	else{
		echo ("errore");
	}
}
?>