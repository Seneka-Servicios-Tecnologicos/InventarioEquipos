<?php

$servidor = "localhost";
$usuario = "senekati_administrador";
$password = "Systemas#32.!Inventario.!";
$baseDatos = "senekati_inventario_equipos";

$conn = new mysqli(
    $servidor,
    $usuario,
    $password,
    $baseDatos
);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

?>