# Contact-Management-API
Contact Management API
This is a RESTful Contact Management API built using Express.js, MongoDB, and JWT (JSON Web Tokens) for user authentication. The API allows users to securely manage their contacts, with operations to create, read, update, and delete contacts.

Features
User Authentication: Users can register and log in to get a JWT token, which is used for authenticating and authorizing requests.
CRUD Operations: Perform Create, Read, Update, and Delete operations on user contacts.
Secure Access: All sensitive routes are protected using JWT authentication to ensure that only the authenticated user can access or modify their own data.
Tech Stack
Backend: Express.js (Node.js)
Database: MongoDB (using Mongoose for ODM)
Authentication: JWT (JSON Web Token)
Other Libraries: bcryptjs (for hashing passwords), dotenv (for environment variables)

