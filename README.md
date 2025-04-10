# 📇 Contact Management API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that allows users to securely manage their personal contact information. It includes user authentication using **JWT** and password hashing with **bcrypt**.

---

## 🔧 Features

- User Registration & Login
- JWT-based Authentication
- Secure Password Hashing using Bcrypt
- Create, Read, Update, Delete (CRUD) Contacts
- Protected Routes for Authenticated Users
- Follows REST API Best Practices

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Bcrypt** for password security
- **Dotenv** for environment variables

---

📬 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/users/register	Register new user
POST	/api/users/login	Login & receive token

Contact Routes (Protected)
Method	Endpoint	Description
GET	/api/contacts	Get all contacts
POST	/api/contacts	Create a contact
GET	/api/contacts/:id	Get single contact
PUT	/api/contacts/:id	Update a contact
DELETE	/api/contacts/:id	Delete a contact
