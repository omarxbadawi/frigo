<?php 
    $testMsgs = true; // true = On, false = Off.

    require_once('configure.inc.php');

    $mysqli = new mysqli($database_host, $database_user, $database_pass, $group_dbnames[0]);

    //Check connection
    if($mysqli -> connect_error) {
    die('Connect Error ('.$mysqli -> connect_errno.') '.$mysqli -> connect_error);
    }
    echo("Connected successfully");

    $sql = "CREATE DATABASE frigoDB";
    doSQL($mysqli, $sql, $testMsgs);

    $sql = "
    CREATE TABLE user (
        user_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        forename VARCHAR(30) NOT NULL,
        surname VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(128) NOT NULL
    )
    ";
    doSQL($mysqli, $sql, $testMsgs);

    $sql = "
    CREATE TABLE ing (
        ing_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        ingredient VARCHAR(30) NOT NULL
    )
    ";
    doSQL($mysqli, $sql, $testMsgs);

    $sql = "
    CREATE TABLE user_ing (
        user_id INT(6) NOT NULL,
        ing_id INT(6) NOT NULL,
        PRIMARY KEY (user_id, ing_id)
    )
    ";
    doSQL($mysqli, $sql, $testMsgs);

    $sql = "
    CREATE TABLE user_rec (
        user_id INT(6) NOT NULL,
        rec_id INT(6) NOT NULL,
        date_added DATE NOT NULL,
        PRIMARY KEY (user_id, rec_id)
    )
    ";
    doSQL($mysqli, $sql, $testMsgs);


    function doSQL($mysqli, $sql, $testMsgs){
        if ($testMsgs){
            echo("<br><code>SQL: $sql</code>");
            if ($result = $mysqli->query($sql)){
                echo("<code> - OK</code>");
            } else{
                echo("<code> - FAIL! " . $conn->error . " </code>");
            }
        } else{
            $result = $mysqli->query($sql);
        }
        return $result;
    }
?>