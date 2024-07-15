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


// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body, this info comes from the JWT in the cookie so it's more secure than relying on an id inside of the body
  const userId = req.user.sub;

  console.info(userId);

  const vehicle = req.body;
  vehicle.ownerId = userId;

  try {
    const insertId = await tables.vehicle.create(vehicle);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
};
