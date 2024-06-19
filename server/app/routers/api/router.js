const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const plugTypesRouter = require("./plugTypes/router");

router.use("/items", itemsRouter);
router.use("/plugtypes", plugTypesRouter);

/* ************************************************************************* */

module.exports = router;
