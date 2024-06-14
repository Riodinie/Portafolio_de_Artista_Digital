<?php

include ("con_dp.php");

#verificar conexión
//if($conex){
    // echo "todo bien";
//}else{
    // echo "todo mal como siempre";
 //}

 #verificar si la variable tiene información
if(isset($_POST['registrar'])){
    if(strlen($_POST['name']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['descripcion']) >= 1&& strlen($_POST['prec']) >= 1&& strlen($_POST['time']) >= 1){
        $name = trim($_POST['name']); //elimina espacios
        $email = trim($_POST['email']);
        $descripcion = trim($_POST['descripcion']);
        $prec = trim($_POST['prec']);
        $time = trim($_POST['time']);
        $fecha_reg = date("d/m/y");
        $consulta = "INSERT INTO datos (nombre,email,descripcion,presupuesto,tiempo, fecha_reg) VALUES ('$name','$email','$descripcion','$prec','$time','$fecha_reg')"; //se insertan los datos en la tabla
        $resultado = mysqli_query($conex, $consulta); //se envian las variables

        if($resultado){
            ?>
     
            <div class="ok">Solucitud Enviada</div>
            <br><br>

            <?php
        }else{
            ?>
            <div class="ok">Error</div>
            <br><br>
            <?php
        }
    }
    else{
        ?>
            <div class="ok">Diligenciar todos los campos</div>
            <br><br>
        <?php
    }
}

?>