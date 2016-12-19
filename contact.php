<?php

// get posted data into local variables
$EmailFrom = Trim(stripslashes($_POST['EmailFrom'])); 
$EmailTo = "contacto@tclchile.cl";
$Subject = "contacto desde web TCL";
$nombre = Trim(stripslashes($_POST['nombre']));  
$mensaje = Trim(stripslashes($_POST['mensaje'])); 

// validation
$validationOK=true;
if (Trim($EmailFrom)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "nombre: ";
$Body .= $nombre;
$Body .= "\n";
$Body .= "\n";
$Body .= "\n";
$Body .= "mensaje: ";
$Body .= $mensaje;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=ok.htm\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>