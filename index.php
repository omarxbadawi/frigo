<?php
echo ('Axios post data successfully!!!');
header("Access-Control-Allow-Origin: *");

echo file_get_contents('php://input');
echo json_decode(file_get_contents('php://input'), true);


?>
