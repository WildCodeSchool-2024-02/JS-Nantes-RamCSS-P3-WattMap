// Import the repository modules responsible for handling data operations on the tables
const ItemRepository = require("./models/ItemRepository");
const PlugTypeRepository = require("./models/PlugTypeRepository");
const StationRepository = require("./models/StationRepository");
const ReservationRepository = require("./models/ReservationRepository");
const ArticleRepository = require("./models/ArticleRepository");
const UserRepository = require("./models/UserRepository")
// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.item = new ItemRepository();
tables.plugType = new PlugTypeRepository();
tables.station = new StationRepository();
tables.article = new ArticleRepository();
tables.user = new UserRepository();
tables.reservation = new ReservationRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
