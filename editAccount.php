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
    		displayDetails();
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
                <form method='POST' action='register.php'>

                    <div class='line'>
                    <label class='label'>Email:</label>
                        <input type='text' name='em' id='em' value='$em' required><br>
                    </div>

                    <div class='line'>
                    <label class='label'>Password:</label>
                        <input type='text' name='pw' id='pw' value='$pw' required><br>
                    </div>

                    <div class='line'>
                    <label class='label'>First Name:</label>
                        <input type='fn' name='fn' id='fn' value='$fn' required><br>
                    </div>

                    <div class='line'>
                    <label class='label'>Surname:</label>
                        <input type='sn' name='sn' id='sn' value='$sn' required><br>
                    </div>

                    <div class='line'>
                    <label class='label'>Password:</label>
                        <input type='password' name='pw' value='$pw' required><br>
                    </div>

                    <div class='line'>
                    <button class='button'>Register</button>
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