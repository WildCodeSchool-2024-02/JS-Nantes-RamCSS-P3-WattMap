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
const vehiclesRouter = require('./vehicles/router');
const reservationsRouter = require('./vehicles/router');

const { login, logout } = require("../../controllers/authActions");

// public routers
router.use("/items", itemsRouter);
router.use("/plugtypes", plugTypesRouter);
router.use("/stations", stationsRouter);
router.use("/articles", articlesRouter);
router.use("/users", usersRouter);
router.use("/vehicles", vehiclesRouter);
router.use("/reservations", reservationsRouter);

// route for user login
router.post("/login", login)
router.post("/logout", logout)


/* ************************************************************************* */

module.exports = router;
