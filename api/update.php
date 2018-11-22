<?php
$data = json_decode(file_get_contents("php://input"));
include "dbconfig.php";
$sql = "UPDATE kontak SET
nama ='$data->nama',  jabatan ='$data->jabatan',
departemen ='$data->departemen',no_hp ='$data->no_hp',no_sisco ='$data->no_sisco'
WHERE id = $data->id ";
$qry = $conn->query($sql);
if($data->nama){
}
$conn->close();
?>

