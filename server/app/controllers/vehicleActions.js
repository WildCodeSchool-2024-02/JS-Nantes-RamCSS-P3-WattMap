const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const vehicles = await tables.vehicle.readAll();
    res.status(200).json(vehicles);
  } catch (err) {
    next(err);
  }
};

// The B of BREAD - Browse (Read All) operation
const readByOwner = async (req, res, next) => {
  // get the user ID in order to make sure the vehicle is his later on for security reasons
  const ownerId = req.user.sub;
  try {
    const vehicles = await tables.vehicle.readByOwnerId(ownerId);
    res.status(200).json(vehicles);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body, this info comes from the JWT in the cookie so it's more secure than relying on an id inside of the body
  const userId = req.user.sub;

  const vehicle = req.body;
  vehicle.ownerId = userId;

  try {
    const insertId = await tables.vehicle.create(vehicle);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  // get the user ID in order to make sure the vehicle is his later on for security reasons
  const ownerId = req.user.sub;
  // the id of the vehicle to be deleted
  const {id} = req.params;

  try {
    const affectedRows = await tables.vehicle.delete(ownerId, id);

    // Check if something was affected and respond accordingly
    if (affectedRows) {
      res.status(200).json(`successfully deteted vehicle n° ${id}`);
    } else {
      res.status(400).json(`couldn't delete vehicle n° ${id}, bad request`);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  readByOwner,
  add,
  destroy,
};
