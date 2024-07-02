const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { add,edit } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");
const { verifyCookie } = require("../../../services/auth");
const { upload } = require("../../../services/fileUpload");

// Route to get a list of items
router.post("/", hashPassword , add);
// TODO router.patch -> update user profile
router.patch("/edit", verifyCookie, upload.single("file"), edit)


/* ************************************************************************* */

module.exports = router;
