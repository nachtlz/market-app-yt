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
