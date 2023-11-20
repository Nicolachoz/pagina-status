<?php
// Configuración de la base de datos
$host = 'localhost';
$usuario = 'root';
$contrasena = '';
$base_datos = 'pagina_status';

// Conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$descripcion = $_POST['descripcion'];

// Obtener la imagen en formato base64
$imagen_base64 = base64_encode(file_get_contents($_FILES['image']['tmp_name']));

// Insertar datos en la base de datos
$sql = "INSERT INTO cotizacion (nombre, telefono, descripcion, imagen) VALUES ('$nombre', '$telefono', '$descripcion', '$imagen_base64')";

if ($conexion->query($sql) === TRUE) {
    echo "Datos insertados correctamente en la base de datos.";
} else {
    echo "Error al insertar datos en la base de datos: " . $conexion->error;
}

// Cerrar la conexión a la base de datos
$conexion->close();
?>