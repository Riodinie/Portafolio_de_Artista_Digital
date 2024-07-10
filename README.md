# Proyecto de Portafolio

Este proyecto es una página web con una versión en PHP que se conecta a una base de datos MySQL para registrar datos de un formulario. A continuación, se presentan las instrucciones para configurar la base de datos y la tabla necesarias para que el proyecto funcione correctamente.

## Características

- Página web desarrollada en PHP
- Conexión a una base de datos MySQL
- Registro de datos a través de un formulario
- Mensajes de éxito y error al enviar el formulario

## Requisitos

- Servidor web con soporte PHP (por ejemplo, Apache)
- Servidor MySQL

## Configuración de la Base de Datos

1. Abre tu gestor de base de datos MySQL (por ejemplo, phpMyAdmin o la línea de comandos MySQL).
2. Crea una base de datos llamada `registro` ejecutando el siguiente comando:

    ```sql
    CREATE DATABASE registro;
    ```

3. Selecciona la base de datos `registro`:

    ```sql
    USE registro;
    ```

4. Crea la tabla `datos` ejecutando el siguiente comando:

    ```sql
    CREATE TABLE datos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        descripcion TEXT NOT NULL
    );
    ```
