const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { read, add, edit } = require("../../../controllers/userActions");
const { verifyEmail, verifyPassword, hashPassword } = require("../../../services/auth");
const { verifyCookie } = require("../../../services/auth");
const { upload } = require("../../../services/imageUpload");

// Route to get a list of items
router.post("/", verifyEmail, verifyPassword, hashPassword, add);
router.get("/", verifyCookie, read);
router.patch("/edit", verifyCookie, upload.single("file"), edit);

/* ************************************************************************* */

module.exports = router;
