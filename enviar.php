<?php
$destinatario = 'gabrielschilliro02@gmail.com';

$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde la página de LQB";

mail($destinatario, $nombre, $asunto, $mensaje, $header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='contact.html'\")";
?>