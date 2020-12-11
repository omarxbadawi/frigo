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
        	echo($_SESSION['loggedIn']);
    		if (!isset($change)){
    			displayDetails();
    		}
        ?>
    </body>
</html>
<?php
    function displayDetails(){
    	$testMsgs = false; // true = On, false = Off.
        
        require('conn.php');

        $user_id = $_SESSION['loggedIn'];

        $sql = "SELECT * FROM user WHERE user_id='$user_id'";
        $result = mysqli_fetch_assoc(doSQL($mysqli, $sql, $testMsgs));

        $em = $result['email'];
        $pw = $result['password'];
        $fn = $result['forename'];
        $sn = $result['surname'];

        $regForm = "
        <div id='myForm'>
            <form method='POST' action='myAccount.php'>

            <div class='line'>
            	<p>Email: " . $em . "</p>
            </div>

            <div class='line'>
            	<p>First Name: " . $fn . "</p>
            </div>

            <div class='line'>
            	<p>Last Name: " . $sn . "</p>
            </div>

            <div class='line'>
            <button class='button' onclick='setChange'>Edit Details</button>
            </div>

            </form>
        </div>
        ";
        echo($regForm);
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