<?php

echo file_get_contents('php://input');
echo json_decode(file_get_contents('php://input'), true);
?>