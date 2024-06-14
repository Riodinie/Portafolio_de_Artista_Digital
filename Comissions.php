<!DOCTYPE html>
<html lang="es">

  <head>
    <meta charset="leo-8559-1"/>
    <meta name="description" content="Portafolio de arte Phoenirislate "/>
    <meta name="keywords" content="art,digital,comissions,arte,comisiones,dibujo"/>
    <link rel="stylesheet" href="Nav.css">
    <link rel="stylesheet" href="Comissions.css">
    <title>Comissions - Phoenirislate</title>
    <script src="https://kit.fontawesome.com/17ab7c87a6.js"></script>
    <link rel= "icon" type="image/png" href="img/icon.png" />
  </head>

<body>

  <input type="checkbox" id="chec">

  <label for="chec" class="label_">
   <i class="ch fas fa-bars"></i>
  </label> 

    <div id="barra">
      <div class="btn">
      </div>
      <ul>
        <li>
          <a href="Index.html" class="t"><p>Phoenirislate Illustration</p></a>
          <a href="Index.html"><img src="img/Logo.png" alt="Logo Artista" class="logo"></a>
          
        </li>
        <hr size="1">
        <li class="color"><a href="Index.html">Art Work</a></li>
        <li class="color"><a href="Comissions.php">Comissions</a></li>
        <li class="color"><a href="Bio.html">Bio</li></a>
        <hr size="1">
        <li>
          <a href="https://www.facebook.com/"><i class="separacion fab fa-facebook-square"></i></i></a>
          <a href="https://www.instagram.com/phoenirislate/"><i class="separacion fab fa-instagram"></i></a>
          <a href="https://twitter.com/"><i class="separacion fab fa-twitter"></i></a>
        </li>
        <li>Copyright © All rights reserved.</li>
      </ul>
    </div>


    <div class="prin">

      <div class="text">
        <div class="tit">PIDE TU COMISION</div>
        <div class="dent">
          <img src="img/comisiones.png" alt="">
        </div>
        </div>

    <form  method="post">
    <br>

    
    <div class="formulario">
    <div><input name="name" class="env" type="text" placeholder="NOMBRE"><br><input name="email"  class= "env" type="email" placeholder="EMAIL"></div>
    <div><textarea name="descripcion" class="caja" id="mensaje" cols="30" rows="10" placeholder="DESCRIPCION"></textarea></div>
    <div><input name="prec" class="env2 pre" type="number" placeholder="PRESUPUESTO"> <input name="time" class="env2" type="number" placeholder="TIEMPO DE PLAZO"></div>
    
    <div><input name="registrar" class="btn_env" type="submit" value="Enviar"></div>
    <br>
    </div>
    </form>

    <?php
    include("registrar.php");
    ?>

    </div>
     

     
  </div>




  </body>
 
</html>