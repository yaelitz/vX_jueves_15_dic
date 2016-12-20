<?php

// get posted data into local variables
//$EmailFrom = Trim(stripslashes($_POST['EmailFrom'])); 
$EmailTo = "yael@trending.cl";
$Subject = "Inscripción a Newsletter desde web TCL";
$email ="Newsletter";

// validation
$validationOK=true;
// if (Trim($EmailFrom)=="") $validationOK=false;
// if (!$validationOK) {
//   echo '<script language="javascript">alert("Lo sentimos, porfavor ingrese un email valido");</script>';
//   exit;
// }

// campos nombres pymes
$EmailFrom = Trim(stripslashes($_POST['EmailFrom'])); 

// prepare email body text
$Body = "";
$Body .= "Mail de inscripción: ";
$Body .= $EmailFrom;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From:". $email);

// redirect to success page 
if ($success){
    ?>
    <script language = 'javascript'>
    alert('Gracias, hemos recibido satisfactoriamente su email.');
	history.go(-1);
	</script>
	<?
//  print "<meta http-equiv=\"refresh\" content=\"0;URL=ok.htm\">";
}
else{
?>
<script language = 'javascript'>
    alert('Algo a salido mal, porfavor intentelo nuevamente.');
    history.go(-1);
</script>
<?
//  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>