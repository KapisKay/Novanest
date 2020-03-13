<?php session_start();
require_once 'dbConfig.php';

if(isset( $_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_GET['email']) && !empty($_GET['password'])) {
    $username = $_GET['email'];
    $password = $_GET['password'];
    $password = md5($password);

    $sql = mysqli_query($con, "SELECT B_id FROM biography WHERE Email ='$username' AND Password = '$password'");
    if($sql) {
        $numOfRows = mysqli_num_rows($sql);
        $Row = mysqli_fetch_array($sql);
        if ($numOfRows == 1) {
            $_SESSION['User_logged'] = $Row['B_id'];
            echo 'logged';
        } else {
            echo 'error';
        }
    }else{
        echo 'queryError';
    }
}
else{
    echo 'noData';
}