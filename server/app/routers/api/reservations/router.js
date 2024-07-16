const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse } = require("../../../controllers/reservationActions");
const { verifyCookie } = require("../../../services/auth");

// Route to get a list of items
router.get("/", verifyCookie, browse);
router.post("/", verifyCookie, browse);


/* ************************************************************************* */

module.exports = router;
