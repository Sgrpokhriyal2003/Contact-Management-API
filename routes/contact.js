const express = require("express");
const router = express.Router();
const validateToken = require("../authMiddleware/auth");
const {
    getContacts,
    createContacts,
    getContactById,
    updateContact,
    deleteContact
} = require("../controllers/contact");

//auth middleware
router.use(validateToken);

router.get("/", getContacts);
router.post("/", createContacts);
router.get("/:id", getContactById);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;