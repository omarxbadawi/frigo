<?php
echo ('Axios post data successfully!!!');
header("Access-Control-Allow-Origin: *");

echo file_get_contents('php://input');
echo json_decode(file_get_contents('php://input'), true);

processUserDetails();

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
