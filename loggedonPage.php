<?php session_start();
require_once 'dbConfig.php';

if(!isset($_SESSION['User_logged'])){
    header("Location: index.html");
    die();
}

$userID = $_SESSION['User_logged'];
$sql = mysqli_query($con,"SELECT * FROM biography WHERE B_id = '$userID'");
$Row = mysqli_fetch_array($sql);


?>

<!DOCTYPE html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AKA</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!--css-->
    <!-- <link href="css/bootstrap.css" rel="stylesheet" media="all" type="text/css"> -->
    <link href="fontawesome/css/font-awesome.css" rel="stylesheet" media="all" type="text/css">
    <!--css-->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="index.html">Konadu</a>
        <p class=""><span class="fa fa-user text-success pt-3"></span>&nbsp; <?php echo $Row['Full_Name'];?></p>
        <a href="logout.php"><button class="btn btn-outline-success my-2 my-sm-0">Sign Out</button></a>
      
      </nav>
      <div class= container>
        <form class="p-3">
            <h3>Profile Details</h3>
            <p>Welcome To Our Page <?php echo $Row['Full_Name'];?></p>
            <p>Your UserName Or Email is  <?php echo $Row['Email'];?></p>
            <button class="btn btn-outline-success" type="button" id='Edit' name="Edit"><span class="fa fa-pencil"></span>&nbsp; Edit</button>
        </form>
        
    </div>
<footer class="d-flex flex-column bg-dark justify-content-center align-items-center p-2 ">
    <p>Copyright &copy AKA 2020</p>
</footer>  
    
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>