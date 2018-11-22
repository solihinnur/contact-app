<?php
$data = json_decode(file_get_contents("php://input"));
include "dbconfig.php";
$sql = "INSERT INTO kontak (nama, jabatan, departemen, no_hp, no_sisco)
VALUES ('$data->nama', '$data->jabatan', '$data->departemen', '$data->no_hp', '$data->no_sisco')";
if($data->nama){
	$qry = $conn->query($sql);
}
$conn->close();
?>
