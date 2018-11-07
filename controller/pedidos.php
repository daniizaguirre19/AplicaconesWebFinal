<?php
include("../dataAccess/dbConnect.php");
include("../dataAccess/userDAO.php");
include("../model/User.php");
header('Accept: application/json');
    header('Content-type: application/json');

    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "practicaphp";

    $conn = new mysqli($servername, $username, $password, $dbname);
/* Signup Form */
    $tortilla = $_POST['tortilla'];
    $ingrediente = $_POST['ingrediente'];
    $opcionales = $_POST['opcionales'];
    $salsa = $_POST['salsa'];
     $nachos = $_POST['nachos'];
    $calle = $_POST['calle'];
    $cantidad = $_POST['cantidad'];
    $username = $_POST['username'];
      
      $sql = "INSERT INTO pedidos 
                    (tortilla, ingrediente, opcionales, salsa, nachos, cantidad, username)
                    VALUES ('$tortilla', '$ingrediente', '$opcionales', '$salsa', '$nachos', '$cantidad', '$username')";

            if (mysqli_query($conn, $sql)){
                $response = array("status" => "success");
                echo json_encode($response);
            }   
            else{
                header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
                die("Error: " . $sql . "\n" . mysqli_error($conn));
            }
    

?>
