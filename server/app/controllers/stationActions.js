// Import CSV and file reading utilities
const fs = require("fs");
const csv = require("csv-parser");
// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all stations from the database
    const stations = await tables.station.readAll();

    // Respond with the stations in JSON format
    res.status(200).json(stations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// this function iterates through a CSV to upload new stations
const addMany = async (req, res, next) => {
  // there should be a middleware that uploads the file and gets its path, for now we'll just wirte it down
  try {
    fs.createReadStream("./database/Stations2.csv")
      .pipe(csv())
      .on("data", async (row) => {
        // for every line in the csv file
        try {
          // before inserting we need to make sure that the station isn't already in db
          // Fetch stations with the name name in db
          const existingStation = await tables.station.readByAddress(row.adresse_station);
          console.info(existingStation);
          // if the station doesn't exist already :
          if (existingStation.length === 0) {
            const newStation = await tables.station.create({
              latitude: row.consolidated_longitude,
              longitude: row.consolidated_latitude,
              name: row.nom_station,
              address: row.adresse_station,
              price: 10,
              maxPower: 250,
              imgUrl: "/public/assets/stations/sample.jpg",
            });
            console.info("inserted",  newStation);
          }
        } catch (err) {
          console.info(err);
        }
      })
      .on("end", () => {
        console.info("CSV file successfully processed");
      });

    // Respond with the stations in JSON format
    res.status(200).json("CSV file was successfully processed");
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  addMany,
};
