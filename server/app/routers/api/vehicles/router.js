const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, readByOwner, add, destroy } = require("../../../controllers/vehicleActions");
const { verifyCookie, verifyAdmin } = require("../../../services/auth");

// Route to get a list of vehicles
router.get("/", verifyCookie, readByOwner);
router.get("/all", verifyCookie, verifyAdmin, browse);
router.post("/", verifyCookie, add);
router.delete("/:id", verifyCookie, destroy);

/* ************************************************************************* */

module.exports = router;
