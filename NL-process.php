<?php
$emailmanager = 'yaelitz@trending.cl';

// save this file, and close it. Thank you!

error_reporting(0);

$msg = '';
foreach ($_POST as $k => $v) { $msg .= $k.': '.$v."\n"; }

$email = trim($_POST['email']);
$Ok = ereg("^([a-zA-Z0-9_\.-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", $email);

$headers  = 'From: ' . $email . "\n"; 
$headers .= 'MIME-Version: 1.0' ."\n"; 
$headers .= 'Content-Type: text/plain; charset=iso-8859-1' ."\n"; 
$headers .= 'Content-Transfer-Encoding: 8bit'. "\n\n";

if ($Ok) {
	mail($emailmanager,'Suscripción Newsletter',$msg,$headers);
?>
<script language = 'javascript'>
	alert('Gracias, su correo ha sido suscrito a nuestra lista de newsletter');
	history.go(-1);
	</script>
	<?
} else {
	?>
	<script language = 'javascript'>
	alert(' Lo sentimos, porfavor ingrese un email valido');
	history.go(-1);
	</script>
	<?
}
?>
