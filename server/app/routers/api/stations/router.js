const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, addMany } = require("../../../controllers/stationActions");
const { verifyCookie, verifyAdmin } = require("../../../services/auth");
 const { upload } = require("../../../services/csvUpload");

// Route to get a list of items
router.get("/", browse);
router.post("/upload", verifyCookie, verifyAdmin, upload.single("file"), addMany);

/* ************************************************************************* */

module.exports = router;
