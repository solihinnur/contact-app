<?php
$data = json_decode(file_get_contents("php://input"));
include "dbconfig.php";
$sql = "DELETE FROM kontak WHERE id = $data->id ";
$result = $conn->query($sql);
$conn->close();
?>
