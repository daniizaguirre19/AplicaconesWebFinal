<?php

if (!empty($_SESSION['user'])) {
    $session_user = $_SESSION['u'];
    include('class/user.php');
    $userClass = new userClass();
}
if (empty($session_uid)) {
    $url = BASE_URL . 'index.html';
    header("Location: $url");
}
?>