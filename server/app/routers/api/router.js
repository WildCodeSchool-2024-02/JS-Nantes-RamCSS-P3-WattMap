const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const plugTypesRouter = require("./plugTypes/router");
const stationsRouter = require("./stations/router");
const articlesRouter = require("./articles/router");
const usersRouter = require("./users/router");
const { login } = require("../../services/auth");

router.use("/items", itemsRouter);
router.use("/plugtypes", plugTypesRouter);
router.use("/stations", stationsRouter);
router.use("/articles", articlesRouter);
router.use("/users", usersRouter);

// route for user login
router.use("/login", login)

/* ************************************************************************* */

module.exports = router;
