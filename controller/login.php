<?php
include("../dataAccess/dbConnect.php");
include("../dataAccess/userDAO.php");

//ini_set('display_errors','1');
session_start();
    
/* Login Form */
  $username = $_POST['username'];
//$username = filter_input(INPUT_POST,'username');
    $password = $_POST['password'];
//$password = filter_input(INPUT_POST, 'password');
$db = getDB();
$userDAO = new userDAO($db);
$user = $userDAO->getUser($username, $password);
if ($user) {
      $_SESSION['user']=$user;
      $url = BASE_URL . 'index.html';
      
      header("Location: $url"); // Page redirecting to home.php 
} else {
     echo "Please check login details.";
  //   $url = BASE_URL . 'index.php';
  //   header("Location: $url"); 
}
?>