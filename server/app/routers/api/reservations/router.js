const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, add, destroy } = require("../../../controllers/reservationActions");
const { verifyCookie } = require("../../../services/auth");

// identification wall for reservation routes
router.use(verifyCookie);

// Route to get a list of items
router.get("/", browse);
router.post("/", add);
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
