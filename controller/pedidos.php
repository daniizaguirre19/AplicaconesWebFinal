<?php
include("../dataAccess/dbConnect.php");
include("../dataAccess/userDAO.php");
header('Accept: application/json');
    header('Content-type: application/json');
    session_start();
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "final";

    $conn = new mysqli($servername, $username, $password, $dbname);
/* Signup Form */
    $paquetes = $_POST['paquetes'];
    $dulces = $_POST['dulces'];
    if(isset($_SESSION['user'])) {
       $user = $_SESSION['user'];
    }else{
        $user = "invitado";
    }
      
      $sql = "INSERT INTO pedidos 
                    (paquetes,dulces,user)
                    VALUES ('$paquetes', '$dulces', '$user')";

            if (mysqli_query($conn, $sql)){
                $response = array("status" => "success");
                echo json_encode($response);
            }   
            else{
                header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
                die("Error: " . $sql . "\n" . mysqli_error($conn));
            }
    

?>
