// Import access to database tables
 const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all stations from the database
     const articles = await tables.article.readAll();

    // Respond with the stations in JSON format
    res.status(200).json(articles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse
};
