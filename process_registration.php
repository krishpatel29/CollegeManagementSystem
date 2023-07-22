<?php

if(isset($_POST['name'])){

    $name = $_POST['name'];
    $insert=false;
    $server="localhost";
    $username="root";
    $password="";

    $con= mysqli_connect($server,$username,$password);
    if(!$con)
    {
        die("connection failed" . mysqli_connect_error());
    }
    $email = $_POST["email"];
    $program = $_POST["program"];
    //echo "success connecting to db";
    $sql="INSERT INTO `college`.`registration` (`name`, `email`, `program`) VALUES ('$name', '$email', '$program');";
   // echo $sql;
    if($con->query($sql)==true)
    {
        //echo "successfully inserted";
        $insert=true;
       // echo "<p class='return'>Thanks,Your Form has been Submitted.</p>";
    }
    else
    {
        echo "Error: $sql <br> $con->error";
    }
    $con->close();
    header("Location: admissions.html");
    exit(); 
}
?>
