const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, addMany } = require("../../../controllers/stationActions");

// Route to get a list of items
router.get("/", browse);
router.post("/upload",addMany);

/* ************************************************************************* */

module.exports = router;
