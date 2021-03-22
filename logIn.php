<?php
    echo ('Axios post data successfully!!!');
    header("Access-Control-Allow-Origin: *");

    echo file_get_contents('php://input');
    echo json_decode(file_get_contents('php://input'), true);

    processUserDetails();

    function processUserDetails(){
    	$testMsgs = false; // true = On, false = Off.
        
        require('conn.php');

        $frmEM = ($_POST['email']);
        $frmPW = ($_POST['Password']);
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