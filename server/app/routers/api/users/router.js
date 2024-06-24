const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, add } = require("../../../controllers/userActions");

// Route to get a list of items
router.get("/", browse);
router.post("/", add);
// TODO router.patch -> update user profile


/* ************************************************************************* */

module.exports = router;
