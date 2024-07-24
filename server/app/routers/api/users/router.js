const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions

const { browse, read, add, edit } = require("../../../controllers/userActions");
const { verifyEmail, verifyCookie, verifyAdmin, verifyPassword, hashPassword } = require("../../../services/auth");
const { upload } = require("../../../services/imageUpload");
const { destroy } = require("../../../controllers/userActions")

// Route to get a list of items
router.post("/", verifyEmail, verifyPassword, hashPassword, add);
router.get("/", verifyCookie, read);
router.get("/all", verifyCookie, verifyAdmin, browse);
router.patch("/edit", verifyCookie, upload.single("file"), edit)
router.delete("/:id", verifyCookie, verifyAdmin, destroy)
router.get ('/api/user', verifyCookie,verifyAdmin, read, browse)


/* ************************************************************************* */

module.exports = router;
