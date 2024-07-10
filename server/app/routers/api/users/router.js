const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { add,edit } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");
const { verifyCookie } = require("../../../services/auth");
const { uploadImage } = require("../../../services/fileUpload");

// Route to get a list of items
router.post("/", hashPassword , add);
router.patch("/edit", verifyCookie, uploadImage.single("file"), edit)


/* ************************************************************************* */

module.exports = router;
