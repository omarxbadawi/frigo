<!DOCTYPE html>
<?php
    session_start();
?>
<html>
    <head>
        <title>Register</title>
        <link rel="stylesheet" href="register.css">
    </head>
    <body>
        <div id="headerwrap">
            <h1>Frigo</h1>
        </div>
        <?php 
            if (!isset($_POST['fn'])){
                getUserDetails();
            } else{
                processUserDetails();
            } 
        ?>
    </body>
</html>
<?php
    function getUserDetails(){
        $fn = $sn = $email = $pw = "";
        if (isset($_POST['fn'])){
            $fn = $_POST['fn'];
            $sn = $_POST['sn'];
            $pw = $_POST['pw'];
        }
        $regForm = "
        <div id='myForm'>
            <p>Register</p>
            <form method='POST' action='register.php'>
                <input type='text' name='fn' id='fn' value='$fn' placeholder='First Name' class='enterDetails' required><br>

                <input type='text' name='sn' id='sn' value='$sn' placeholder='Last Name' class='enterDetails' required><br>

                <input type='email' name='email' id='email' placeholder='Email Address' class='enterDetails' required><br>

                <input type='email' name='cemail' id='email' placeholder='Confirm Email Address' class='enterDetails' required><br>

                <input type='password' name='pw' value='$pw' placeholder='Password' class='enterDetails' required><br>

            <button class='button'>Register</button>
            </form>
            <a href=logIn.php>Login Page</a> 
        </div>
        ";
        echo($regForm);
    }
    function processUserDetails(){
        $testMsgs = false; // true = On, false = Off.
        
        require('conn.php');

        $frmFN = ($_POST['fn']);
        $frmSN = ($_POST['sn']);
        $frmEM = ($_POST['email']);
        $frmPW = ($_POST['pw']);
        $frmConfirmEM = $_POST['cemail'];

        $password = password_hash($frmPW, PASSWORD_DEFAULT);

        if ($frmEM !== $frmConfirmEM){
            echo("Email address does not match confirm email address. Try again");
        } else{
            $sql = "INSERT INTO user (forename, surname, email, password) 
                VALUES ('$frmFN', '$frmSN', '$frmEM', '$password') ";
            $result = doSQL($mysqli, $sql, $testMsgs);
            if (strpos($result, 'Duplicate entry') !== false){
                echo("The email address you provided is already in user. Try another address");
                getUserDetails();
            } else{
                header("location:logIn.php");
                exit();
            }
        }
    }
    function doSQL($mysqli, $sql, $testMsgs){
        if ($testMsgs) echo("<br><code>SQL: $sql</code>");
        if ($result = $mysqli->query($sql)){
            if ($testMsgs) echo("<code> - OK</code>");
        } else{
            if ($testMsgs) echo("<code> - FAIL! " . $mysqli->error . " </code>");
            $result = $mysqli->error;
        }
        return $result;
    }

?>