<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "diyetisyen_db"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Bağlantı başarısız: " . $conn->connect_error);
}

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$age = $_POST['age'];
$message = $_POST['message'];

$sql = "INSERT INTO danisanlar (name, surname, email, age, message) 
        VALUES ('$name', '$surname', '$email', '$age', '$message')";

if ($conn->query($sql) === TRUE) {
    header("Location: success.html"); // Başarı sayfasına yönlendir
} else {
    header("Location: error.html"); // Hata sayfasına yönlendir
}

$conn->close();
?>

