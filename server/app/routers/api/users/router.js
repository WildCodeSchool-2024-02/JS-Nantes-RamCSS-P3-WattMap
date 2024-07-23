const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add, edit } = require("../../../controllers/userActions");
const { verifyEmail, verifyCookie, verifyAdmin, verifyPassword, hashPassword } = require("../../../services/auth");
const { upload } = require("../../../services/imageUpload");

// Route to get a list of items
router.post("/", verifyEmail, verifyPassword, hashPassword, add);
router.get("/", verifyCookie, read);
router.get("/all", verifyCookie, verifyAdmin, browse);
router.patch("/edit", verifyCookie, upload.single("file"), edit)


/* ************************************************************************* */

module.exports = router;
