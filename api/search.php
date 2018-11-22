<?php
$data = json_decode(file_get_contents("php://input"));
include "dbconfig.php";
$sql = "SELECT * FROM kontak WHERE nama LIKE '%$data->nama%'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($data);
$conn->close();
?>
