E-Commerce Backend API
A robust backend API for e-commerce platforms, built using Node.js, MongoDB, and Thunder Client for testing. This API provides key functionalities for managing products, creating orders, and updating stock dynamically during order creation.

Features
Get Products: Retrieve product details with ease.
Create Orders: Add new orders while automatically updating the stock.
Update Stock: Integrated stock management ensures accurate inventory levels.
Technologies Used
Node.js: For server-side application logic.
MongoDB: To store and manage product and order data.
Thunder Client: For API testing and debugging.

API Endpoints
Get Products

URL: /api/products
Method: GET
Description: Fetches a list of available products.
Create Order

URL: /api/orders
Method: POST
Description: Creates a new order and updates stock accordingly.
Update Stock

URL: /api/orders/:orderId
Method: PUT
Description: Adjusts stock levels during order updates.
Project Structure
bash
Copy code
ecommerce-backend-api/  
├── models/         # MongoDB schemas  
├── routes/         # API routes  
├── controllers/    # Business logic  
├── config/         # Database configuration  
├── .env            # Environment variables  
├── package.json    # Dependencies  
└── server.js       # Entry point  
Future Enhancements
User authentication and authorization.
Enhanced search and filtering for products.
Integration of payment gateways.
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
