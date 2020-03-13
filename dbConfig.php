<?php
$host = "localhost";
$user = "root";
$password = "";
$database="novanest";
$con=mysqli_connect($host,$user,$password) or die('cannot connect to the server');
$connect=mysqli_select_db($con,"$database")  or die('database selection problem');

