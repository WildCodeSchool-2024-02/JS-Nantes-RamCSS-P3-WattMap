// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all plugTypes from the database
    const plugTypes = await tables.plugType.readAll();
    console.info('je suis dans cete route')

    // Respond with the plugTypes in JSON format
    res.status(200).json(plugTypes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse
};
