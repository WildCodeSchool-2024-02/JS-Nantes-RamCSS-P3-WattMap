const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { add } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");


// Route to get a list of items
router.post("/", hashPassword , add);
// TODO router.patch -> update user profile


/* ************************************************************************* */

module.exports = router;
