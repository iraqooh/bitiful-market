# Bitiful Market

Bitiful Market is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The project provides a scalable and modular architecture for managing products and powering a modern online marketplace.

## Features

- Full CRUD operations for products

- RESTful API built with Express and Node.js

- MongoDB with Mongoose ODM (schema validation & timestamps)

- Clean and modular backend architecture

- JSON-based API communication

- Fully integrated frontend UI

## Frontend Features

- Frontend Features

- Product listing (Home page)

- Create product form

- Loading and error states

- Success and error alerts

- Responsive UI using Chakra UI

- Client-side routing with React Router

- Global state management with Zustand

- Light / Dark mode support

## Tech Stack

**Frontend**

- React

- JavaScript (ES6+)

- Chakra UI

- React Router DOM

- Zustand (state management)

**Backend**

- Node.js

- Express.js

- MongoDB

- Mongoose

## 📁 Project Structure 

### Backend

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

### Frontend

```pgsql
frontend/
│── src/
│   │── components/
│   │   ├── Alerted.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── UpdateProductDialog.jsx
│   │   └── ui/
│   │       └── color-mode.js
│   │── pages/
│   │   ├── HomePage.jsx
│   │   └── CreatePage.jsx
│   │── store/
│   │   └── product.js
│   │── App.jsx
│   │── main.jsx
```

##🔌 API Endpoints (Sample)
| Method | Endpoint               | Description      |
| ------ | ---------------------- | ---------------- |
| POST   | `/api/v1/products`     | Create a product |
| GET    | `/api/v1/products`     | Get all products |
| PUT    | `/api/v1/products/:id` | Update a product |
| DELETE | `/api/v1/products/:id` | Delete a product |

## 🖥️ Frontend Pages

### Home Page (/)

- Fetches all products from the backend

- Displays products in a responsive grid

- Handles loading, empty states, and server offline scenarios

### Create Page (/create)

- Form for creating new products

- Fields: name, price, image URL

- Displays success and error alerts

- Automatically resets form on successful submission

## ⚙️ Setup & Installation

### Clone Repository

```bash
git clone https://github.com/iraqooh/bitiful-market.git
cd bitiful-market
```

### Backend Setup

```bash
npm install
npm run back # Start API server
```

Create a .env file and add:

```env
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
PORT=your_api_port_number
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🚀 Running the Application

- Backend runs on: http://localhost:PORT

- Frontend runs on: http://localhost:5173

## 📌 Future Improvements

- User authentication & authorization

- Shopping cart & checkout

- Payments integration

- Admin dashboard

- Pagination, filtering, and search

- Image upload support

- Deployment (Docker / Cloud)

## 👨‍💻 Author

Mr. Iraku Harry
