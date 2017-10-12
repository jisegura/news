<?php

if($_POST){
    $name = $_REQUEST['nombre'];
    $company = $_REQUEST['empresa'];
    $telephone = $_REQUEST['telefono'];
    $email = $_REQUEST['mail'];
    $comment = $_REQUEST['comentario'];

    $to = "hshpsoftware@gmail.com";

    $mensaje =
		"Nombre: " .$name ."\r\n"
        ."Empresa: " .$company ."\r\n" ."\r\n"
        ."Email: " .$email ."\r\n" ."\r\n"
        ."Teléfono: " .$telephone ."\r\n" ."\r\n"
        ."Comentario: " .$comment ."\r\n"
    ;

	$subject = "NEWS Web - Consulta de: " .$name ."-" .$company;

	$header = "From: " .$email ."\r\n";
	$header.= "MIME-Version: 1.0\r\n";
	$header.= "Content-Type: text/plain; charset=utf-8\r\n";
	$header.= "X-Priority: 1\r\n";

    mail($to,$subject,$mensaje,$header);
}

?>
