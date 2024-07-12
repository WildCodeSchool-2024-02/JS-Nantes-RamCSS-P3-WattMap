const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { add, edit, browse } = require("../../../controllers/vehicleActions");
const { verifyCookie } = require("../../../services/auth");
const { upload } = require("../../../services/fileUpload");

// Route to get a list of vehicles
router.get("/", browse);
router.post("/", verifyCookie, add);
router.patch("/edit", verifyCookie, upload.single("file"), edit);

/* ************************************************************************* */

module.exports = router;
