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
const uploadRouter = require("./uploads/router");

const { login } = require("../../controllers/authActions");

// public routers
router.use("/items", itemsRouter);
router.use("/plugtypes", plugTypesRouter);
router.use("/stations", stationsRouter);
router.use("/articles", articlesRouter);
router.use("/users", usersRouter);

// route for user login
router.post("/login", login)

// TODO : put authentication wall here
router.use("/upload", uploadRouter);

/* ************************************************************************* */

module.exports = router;
