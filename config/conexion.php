<?php

$servidor = "127.0.0.1";
$usuario = "root";
$password = "";
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