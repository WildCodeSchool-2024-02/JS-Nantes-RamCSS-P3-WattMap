const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { add, browse } = require("../../../controllers/vehicleActions");
const { verifyCookie, verifyAdmin } = require("../../../services/auth");

// Route to get a list of vehicles
router.get("/", verifyCookie, verifyAdmin, browse);
router.post("/", verifyCookie, add);

/* ************************************************************************* */

module.exports = router;
