<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Art Work - Phoenirislate</title>
  <link rel="icon" type="image/png" href="img/icon.png" />
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <div class="sidebar-menu">
    <ion-icon name="menu-outline"></ion-icon>
    <ion-icon name="close-outline"></ion-icon>
  </div>

  <div class="sidebar">
    <div>
      <div class="logo">
        <ion-icon id="logo-icon" name="star"></ion-icon>
        <span>Phoenirislate</span>
      </div>
      <div class="img-container-logo"><img class="sidebar-logo" src="img/Logo.png" alt=""></div>
      <a href="https://www.instagram.com/phoenirislate/">
        <button class="sidebar-botton">
          <ion-icon name="logo-instagram"></ion-icon>
          <span>Instagram</span>
      </button>
      </a>
    </div>

    <nav class="navbar">
      <div class="line"></div>
      <ul>
        <li>
          <a href="index.html">
            <ion-icon name="images"></ion-icon>
            <span>Galería</span>
          </a>
        </li>
        <li>
          <a  id="inbox" href="Comissions.html">
            <ion-icon name="mail"></ion-icon>
            <span>Comisiones</span>
          </a>
        </li>
        <li>
          <a href="Bio.html">
            <ion-icon name="person"></ion-icon>
            <span>Sobre mí</span>
          </a>
        </li>
      </ul>
      <div class="line"></div>
    </nav>

    <div class="switch">
      <div class="circle">
      </div>

      <div class="sidebar-footer">
        <div class="info-sidebar-footer">
          <span>Copyright © All rights reserved.</span>
        </div>
      </div>
    </div>

  </div>

  <main>
    <h1 class="title-pag">Pide tu comision</h1>
    <div class="comissions">    
      <div class="comission-body">
      <div class="text-com">
        <img src="img/comisiones.png">
      </div>
      <form method="POST">
        <br>
        <div class="comission-form">
          <div><input name="name" class="env" type="text" placeholder="NOMBRE"><input name="email" class="env"
              type="email" placeholder="EMAIL"></div>
          <div><textarea name="descripcion" id="mensaje" cols="30" rows="10" placeholder="DESCRIPCION"></textarea></div>
          <div><input name="registrar" class="btn_env" type="submit" value="Enviar"></div>
          <br>
        </div>
      </form>
      
    <?php
    include("registrar.php");
    ?>
    </div>
  </div>
  </main>


  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  <script src="js/script.js"></script>
</body>

</html>

