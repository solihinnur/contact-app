<?php
$data = json_decode(file_get_contents("php://input"));

include "dbconfig.php";

$sql = "SELECT * FROM user WHERE username = '$data->username' AND password = '$data->password'";

$result = $conn->query($sql);
$data = array();

if ($result) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data[] = "{ message: 0 result. }";
}
echo json_encode($data);
$conn->close();
?>
