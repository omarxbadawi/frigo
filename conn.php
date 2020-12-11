<?php
	//use for published version
    require_once('config.inc.php');
    $mysqli = new mysqli($database_host, $database_user, $database_pass, $group_dbnames[0]);

    //localhost testing
    //$servername = "localhost";
    //$username = "root";
    //$password = "root";
    //$database = "frigoDB";
    //$mysqli = new mysqli($servername, $username, $password, $database);
?>