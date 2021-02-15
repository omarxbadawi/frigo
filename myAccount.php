<!DOCTYPE html>
<?php
    session_start();
?>
<html>
<head>
        <title>Account</title>
        <link rel="stylesheet" href="home.css">
    </head>
    <body>
        <header>
            <h1  id="headerwrap">FRIGO</h1>
        </header>
            <ul>
                <li><a class="active" href="choose_ingredients.html">Ingredients</a></li>
                <li><a href="recipe_instructions.html">Recipes</a></li>
                <li><a href="myAccount.php">My Account</a></li>
                <li><a href="settings.html">Website Settings</a></li>
            </ul>
        <div class = "main-content">
        <main>
				<h2>account managements </h2>
				<p>recipe used: </p>
				<p>recipe liked: </p>
			</main>
        </div>
        <footer> 
            <p>contact us</p>
        </footer>

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