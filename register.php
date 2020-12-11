<!DOCTYPE html>
<html>
    <head>
        <title>Register</title>
    </head>
    <body>
        <h1>Registration Page</h1>
        <?php 
            if (!isset($_POST['fn'])){
                echo("<p>Please complete the form to register.</p>");
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
            <form method='POST' action='register.php'>
            <label>Forename:</label>
                <input type='text' name='fn' id='fn' value='$fn' required><br>
            <label>Surname:</label>
                <input type='text' name='sn' id='sn' value='$sn' required><br>
            <label>Email:</label>
                <input type='email' name='email' id='email' required><br>
            <label>Confirm Email:</label>
                <input type='email' name='cemail' id='email' required><br>
            <label>Password:</label>
                <input type='password' name='pw' value='$pw' required><br>
            <button>Register</button>
            </form> 
        </div>
        ";
        echo($regForm);
    }
    function processUserDetails(){
        $testMsgs = true; // true = On, false = Off.
        
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