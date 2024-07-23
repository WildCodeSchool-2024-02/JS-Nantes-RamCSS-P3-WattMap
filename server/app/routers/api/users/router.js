const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { read, add, edit } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");
const { verifyCookie, verifyAdmin } = require("../../../services/auth");
const { upload } = require("../../../services/imageUpload");
const { destroy } = require("../../../controllers/userActions")
const { readFullusers} = require("../../../controllers/userActions")

// Route to get a list of items
router.post("/", hashPassword, add);
router.get("/", verifyCookie, read);
router.patch("/edit", verifyCookie, upload.single("file"), edit)
router.delete("/:id", verifyCookie, verifyAdmin, destroy)
router.get ('/api/user', verifyCookie,verifyAdmin, readFullusers)


/* ************************************************************************* */

module.exports = router;
