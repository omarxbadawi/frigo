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
            if (!isset($_POST['em'])){
                echo("<p>Log In</p>");
                getUserDetails();
            } else{
                processUserDetails();
            } 
        ?>
    </body>
</html>
<?php
    function getUserDetails(){
        $em = $pw = "";
        $regForm = "
        <div id='myForm'>
            <form method='POST' action='logIn.php'>

            <div class='line'>
            <label class='label'>Email:</label>
                <input type='text' name='em' id='em' value='$em' required><br>
            </div>

            <div class='line'>
            <label class='label'>Password:</label>
                <input type='password' name='pw' id='pw' value='$pw' required><br>
            </div>

            <div class='line'>
            <button class='button'>Log In</button>
            </div>

            </form>
      		<a href=register.php>Create a new account</a>
        </div>
        ";
        echo($regForm);
    }

    function processUserDetails(){
    	$testMsgs = false; // true = On, false = Off.
        
        require('conn.php');

        $frmEM = ($_POST['em']);
        $frmPW = ($_POST['pw']);
        $password = password_hash($frmPW, PASSWORD_DEFAULT);

        if ($frmEM == "" or $frmPW == ""){
            echo("Input Fields left blank");
        } else{
            $sql = "SELECT * FROM user WHERE email='$frmEM'";
            $result = mysqli_fetch_assoc(doSQL($mysqli, $sql, $testMsgs));

            if (isset($result)){
            	if (!password_verify($frmPW, $result['password'])){
	                echo("Invalid login details");
	                getUserDetails();
	            } elseif (password_verify($frmPW, $result['password']) and $frmEM == $result['email']){
	            	$_SESSION['loggedIn'] = $result['user_id'];
	                header("location:home.php");
	                exit();
            	}
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