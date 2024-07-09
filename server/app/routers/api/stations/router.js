const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, addMany } = require("../../../controllers/stationActions");

// Route to get a list of items
router.get("/", browse);
router.get("/upload",addMany); // TODO : add middleware to check admin or not


/* ************************************************************************* */

module.exports = router;
