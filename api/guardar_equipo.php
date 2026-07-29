<?php

include "../config/conexion.php";


$idequipo = $_POST['id_equipo'];
$nombreusuario = $_POST['nombre_usuario'];
$departamento = $_POST['departamento'];
$direccion_ip = $_POST['direccion_ip'];
$direccion_mac = $_POST['direccion_mac'];


$sql = "INSERT INTO equipos
(
id_equipo,
nombre_usuario,
departamento,
direccion_ip,
direccion_mac
)
VALUES
(
'$idequipo',
'$nombreusuario',
'$departamento',
'$direccion_ip',
'$direccion_mac'
)";


if ($conn->query($sql) === TRUE) {

    echo "Equipo guardado correctamente";

} else {

    echo "Error: " . $conn->error;

}


$conn->close();

?>