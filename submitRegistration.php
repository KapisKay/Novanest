<?php
//echo "Hello";
require_once 'dbConfig.php';

if(isset( $_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_GET['name']) && !empty($_GET['email']) && !empty($_GET['password'])&& !empty($_GET['cpassword']) ) {
    $Name = $_GET['name'];
    $Email = $_GET['email'];
    $Password = $_GET['password'];
    $Password = md5($Password);

    $query = mysqli_query($con,"INSERT INTO biography (Full_Name, Email, Password)
                                                    VALUES ('$Name','$Email','$Password')");
    if($query){
        echo 'inserted';
    }
    else{
        echo 'notInserted';
    }
}
else{
    echo 'noData';
}

