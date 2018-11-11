<?php
include("../dataAccess/dbConnect.php");
include("../dataAccess/userDAO.php");
include("../model/User.php");

/* Signup Form */
if (!empty($_POST['signupSubmit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
        
        $db = getDB();
        $userDAO = new userDAO($db);
        $user=new User($username, $password, $email);
        $result = $userDAO->addUser($user);
        echo $result;
        session_start();
        if ($user) {
            $_SESSION['user']=array('name'=>$name);
            $url = BASE_URL . 'index.html';
            header("Location: $url"); // Page redirecting to index.php 
        } else {
          
            $_SESSION['error']= "Username already exists";
            $url = BASE_URL . 'registerUser.php';
        }
    
}
?>
