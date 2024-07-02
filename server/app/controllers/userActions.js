// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.status(200).json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit operation

// This method needs the middlewares verifiyCookies and upload in order to work
const edit = async (req, res, next) => {
  // Extract the user data from the request body, this info comes from the JWT in the cookie so it's more secure than relying on an id inside of the body
  const userId = req.user.sub;

  // Extract user information from the request
  const { firstname, lastname } = req.body;

  try {
    // if request doesn't include a file, filepath will remain empty
    let filepath = ''

    if (req.file) {
      const { filename } = req.file;
      // this is the path that the front end will need to fetch
      filepath = `/assets/images/profilePictures/${filename}`;
    } 

    // Update the user 
    const affectedRows = await tables.user.update({
      id: userId,
      firstname,
      lastname,
      imgUrl: filepath,
    });

    if (affectedRows === 1)
      res.status(201).json({ message: "User updated"});
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(user);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  edit,
  add,
};
