<?php
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $caseName = $_POST["case"];

    switch ($caseName) {
        case 'fetchData':
            fetchData();
            break;
        default:
            echo "Invalid case";
            break;
    }
}

function fetchData() {
    global $conn;

    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    $data = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    echo json_encode($data);
}

$conn->close();
?>
