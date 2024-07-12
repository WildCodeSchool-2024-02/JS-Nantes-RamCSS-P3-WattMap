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

// The E of BREAD - Edit operation
const edit = async (req, res, next) => {
  const vehicleId = req.body.id; // Assuming the vehicle ID is sent in the body
  const { brand, model } = req.body;

  try {
    let filepath = "";

    if (req.file) {
      const { filename } = req.file;
      filepath = `/assets/images/vehicles/${filename}`;
    }

    const affectedRows = await tables.vehicle.update({
      id: vehicleId,
      brand,
      model,
      imgUrl: filepath,
    });

    if (affectedRows === 1)
      res.status(200).json({ message: "Vehicle updated" });
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const vehicle = req.body;

  try {
    const insertId = await tables.vehicle.create(vehicle);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
  add,
};
