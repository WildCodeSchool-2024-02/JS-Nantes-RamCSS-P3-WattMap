const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import station-related actions
const { browse, read, addMany } = require("../../../controllers/stationActions");
const { verifyCookie, verifyAdmin } = require("../../../services/auth");
const { upload } = require("../../../services/csvUpload");

// Route to get a list of items
router.get("/", browse);
router.get("/:id", read);
// Route to update database with a csv file
router.post("/upload", verifyCookie, verifyAdmin, upload.single("file"), addMany);

/* ************************************************************************* */

module.exports = router;
