<?php   
    $connect = mysqli_connect("localhost", "root", "empire", "good_health");  
    $id = $_GET['id'];
    $sql = "SELECT username,email FROM User WHERE id='$id'";  
    $result = mysqli_query($connect, $sql);   
    $res = mysqli_fetch_assoc($result);
    $username = $res['username'];
    $useremail = $res['email'];
   
?>  