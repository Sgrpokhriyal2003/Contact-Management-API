const express = require("express");
const dotenv = require("dotenv").config(); 
const app = express();
const PORT = process.env.PORT || 8000;
const dbConnection = require("./config/db");

const myLogger = require("./logger/log");

//dbConnection
dbConnection();

//middleware
app.use(express.json());

//import contact route
const contactRoute = require("./routes/contact");
const userRoute = require("./routes/user");

//use contact route
app.use("/api/contacts", myLogger, contactRoute);
app.use("/api/user", myLogger, userRoute);

app.get("/", myLogger, (req, res) => {
    return res.status(200).json({message: "Welcome To Contact Management App"});
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})