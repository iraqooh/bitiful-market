# Bitiful Market

Bitiful Market is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The project provides a scalable and modular architecture for managing products and powering a modern online marketplace.

## Features

- Full CRUD operations for products

- RESTful API built with Express and Node.js

- MongoDB with Mongoose ODM (schema validation & timestamps)

- Clean and modular backend architecture

- JSON-based API communication

- Ready for frontend integration and deployment

## Tech Stack

**Frontend**

- React

- JavaScript (ES6+)

**Backend**

- Node.js

- Express.js

- MongoDB

- Mongoose

## 📁 Project Structure (Backend)

```pgsql
backend/
│── config/
│   └── db.js
│── models/
│   └── product.model.js
│── routes/
│   └── product.routes.js
│── controllers/
│   └── product.controller.js
│── server.js
```

##🔌 API Endpoints (Sample)
| Method | Endpoint               | Description      |
| ------ | ---------------------- | ---------------- |
| POST   | `/api/v1/products`     | Create a product |
| GET    | `/api/v1/products`     | Get all products |
| PUT    | `/api/v1/products/:id` | Update a product |
| DELETE | `/api/v1/products/:id` | Delete a product |

⚙️ Setup & Installation

```bash
git clone https://github.com/iraqooh/bitiful-market.git
cd bitiful-market
npm install
npm run back # Start API server
```

Create a .env file and add:

MONGO_URI=your_mongodb_connection_string

## 📌 Future Improvements

- User authentication & authorization

- Shopping cart & checkout

- Payments integration

- Admin dashboard

- Pagination, filtering, and search

- Deployment (Docker / Cloud)

## 👨‍💻 Author

Mr. Iraku
