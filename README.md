# Product Order Management System

## Description

The Product Order Management System is a web application designed to simplify the process of selecting products and placing orders. Users can browse available products, adjust quantities based on available stock, and create orders. The application ensures that stock levels are updated in real-time and prevents orders from being placed if there is insufficient stock.

## Features

### Backend
- **RESTful API**: Provides endpoints for product and order management.
- **Persistence**: Uses a database to store user, product and order information.
- **Framework**: Developed with Spring Boot.

### Frontend
- **Product Listing**: Display a list of available products with their name, price, and current stock level.
- **Quantity Adjustment**: Users can increment or decrement the quantity of each product they wish to order.
- **Order Creation**: Users can create orders based on the selected product quantities.
- **Real-time Stock Update**: Stock levels are updated in real-time as users adjust quantities.
- **Product Management**: Administrator can add new products and update name, price or stock for existing ones.
- **Error Handling**: Provides error messages for out-of-stock products and other issues.
- **Modern User Interface**: Developed with Tailwind CSS for a clean and responsive design.

## Technologies

- **Backend**: Spring Boot, Java, MySQL
- **Frontend**: Next.js, React, Tailwind CSS


# Aplicación Mercado con Spring

## Páginas y peticiones a hacer desde el frontend con Next.js:

- **Inicio de sesión (/login)**: Comprobar que se encuentra un usuario con ese nombre y contraseña, en caso contrario notificar el error.
- **Registro de usuario (/register)**: Crear un usuario, comprobar que su usuario sea único e iniciar sesión si todo va bien.
- **Página principal (/)**: Lista los pedidos del usuario, petición de `getOrdersByPersonId`.
- **Hacer pedido (/order)**: Formulario con la lista de todos los productos. Se mostrará una lista de filas con nombre y precio, y un contador de cantidad de productos a comprar. Se debe comprobar que la cantidad de productos que seleccione el usuario esté dentro del stock. Una vez se haya hecho el pedido, actualizar el stock de los productos. Se crea el pedido indicando el ID de la persona, el ID de los productos y la cantidad.
- **Gestionar productos (/products)**: Si el usuario es el administrador (nombre del usuario es “admin”), habrá una opción más de navegación. Una pestaña donde se listan los productos para poder añadirlos, editarlos o eliminarlos.

## Funcionalidades del producto:

- Como usuario quiero iniciar sesión o registrarme para hacer un pedido.
- Como usuario quiero poder ver mis órdenes.
- Como usuario quiero poder crear mis órdenes.
- Como usuario quiero ver los productos que hay para pedir.
- Como administrador quiero añadir productos nuevos.
- Como administrador quiero actualizar la información de los productos.
- Como administrador quiero reponer el stock de un producto.

## Herramientas a instalar:

### Backend:
- **IntelliJ**: [Descargar IntelliJ](https://www.jetbrains.com/idea/download/?section=windows)
- **JDK**: Desde IntelliJ
- **Postman**: [Descargar Postman](https://www.postman.com/)
- **MySQL**: [Descargar MySQL](https://dev.mysql.com/downloads/mysql/8.0.html)
- **Spring Initializer**: [Spring Initializer](https://start.spring.io/)

### Frontend:
- **Visual Studio Code**: [Descargar VSC](https://code.visualstudio.com/)
- **Node.js**: [Descargar Node.js](https://nodejs.org/en/download/prebuilt-installer)
