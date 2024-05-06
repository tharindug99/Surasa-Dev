<?php
// Allow requests from multiple origins
$allowedOrigins = array('http://localhost:3000', 'http://localhost:5173');
if (in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from POST request
    $user = isset($_POST['name']) ? $_POST['name'] : '';
    // Send response
    echo "Hello from server: $user";
} else {
    // Handle other types of requests (GET, PUT, DELETE, etc.) if needed
    http_response_code(405); // Method Not Allowed
    echo "Method Not Allowed";
}
?>
