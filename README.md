#  Pet Adoption & Care Platform (MERN Stack Project)

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The platform enables users to adopt pets and buy pet-related products online. It includes user authentication, admin controls, and an interactive UI for a seamless experience.

---

##  Features

###  User Features
- User Registration & Login (Authentication)
- Browse pets and pet-related products
- Add items to cart and complete purchases
- View personal profile and purchase history

### 🛠️Admin Features
- Add, update, or delete products and pets
- Manage users and orders from a secure dashboard
- Real-time access to database updates

---

##  Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React.js, HTML/CSS |
| Backend      | Node.js, Express.js |
| Database     | MongoDB (via Mongoose) |
| Authentication | JWT (JSON Web Tokens) |
| Deployment   | (Add here if deployed: Render, Vercel, etc.) |

---


---

## 🛠️ Installation & Running Locally

### 📦 Prerequisites
- Node.js & npm
- MongoDB installed locally or MongoDB Atlas

### 🔧 Steps

1. **Clone the repository**

git clone https://github.com/AKIL3333/project-mern.git
cd project-mern

Install backend dependencies
cd backend
npm install

Install frontend dependencies
cd ../frontend
npm install

Configure Environment Variables
Create a .env file in the /backend folder:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

Run the application
Start the backend:
cd backend
npm start

Start the frontend:
cd frontend
npm start
Access the app at: http://localhost:3000
