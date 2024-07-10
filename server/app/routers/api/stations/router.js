const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, addMany } = require("../../../controllers/stationActions");
const { verifyCookie, verifyAdmin } = require("../../../services/auth");
const { uploadCSV } = require("../../../services/fileUpload");

// Route to get a list of items
router.get("/", browse);
router.post("/upload", verifyCookie, verifyAdmin, uploadCSV.single("file"), addMany);

/* ************************************************************************* */

module.exports = router;
