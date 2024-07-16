// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  // Extract the user data from the request body, this info comes from the JWT in the cookie so it's more secure than relying on an id inside of the body
  const userId = req.user.sub;

  try {
    // Fetch all reservations for the connected user from the database
    const reservations = await tables.reservation.readByUserId(userId);

    // Respond with the reservations in JSON format
    res.status(200).json(reservations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};


// Ready to export the controller functions
module.exports = {
  browse
};
