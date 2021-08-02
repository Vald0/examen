<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$db = "interior";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

$gafet = $_POST['gafet'];



$resultado = mysqli_query( $conn, "SELECT GAFET FROM usuarios WHERE GAFET = '$gafet' ");

$fila = mysqli_fetch_row($resultado);

echo $fila[0];
echo $fila[1];
echo $fila[2];
echo $fila[3];
echo $fila[4]; 
 ?>