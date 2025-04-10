const express = require("express");
const router = express.Router();
const validateToken = require("../authMiddleware/auth")
const {
    registerUser,
    loginUser,
    currentUser
} = require("../controllers/user");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken,currentUser);

module.exports = router;