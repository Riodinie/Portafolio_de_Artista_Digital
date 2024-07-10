<?php
include ("con_dp.php");

# Verificar conexión
if(!$conex){
    die("Conexión fallida: " . mysqli_connect_error());
}

# Verificar si la variable tiene información
if(isset($_POST['registrar'])){
    if(strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['descripcion']) >= 1){
        $name = trim($_POST['name']); // Eliminar espacios
        $email = trim($_POST['email']);
        $descripcion = trim($_POST['descripcion']);
        
        // Preparar la consulta para evitar inyecciones SQL
        $stmt = $conex->prepare("INSERT INTO datos (nombre, email, descripcion) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $descripcion);

        if($stmt->execute()){
            ?>
            <div style="color: white;" >Solicitud Enviada</div>
            <br><br>
            <?php
        } else {
            ?>
            <div style="color: white;" >Error: <?php echo $stmt->error; ?></div>
            <br><br>
            <?php
        }

        $stmt->close();
    } else {
        ?>
        <div style="color: white;" >Diligenciar todos los campos</div>
        <br><br>
        <?php
    }
}

$conex->close();
?>