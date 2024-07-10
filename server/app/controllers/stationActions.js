// Import CSV and file reading utilities
const fs = require("fs");
const path = require("path");
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

// this function iterates through an uploaded CSV to upload new stations
const addMany = async (req, res, next) => {
  try {
    if (req.file) {
      // this is the path where the middleware stocked the uploaded file
      const filePath = path.resolve(
        __dirname,
        `../../public/assets/stations/${req.file.filename}`
      );
      // TODO : we need to decide collectively wether or not this function shall erase all previously existing stations

      // this is a stream that will read the file line by line
      const stream = fs.createReadStream(filePath).pipe(csv());
      stream
        .on("data", async (row) => {
          // for every line in the csv file

          // pause stream until treatment of this line is finished.
          stream.pause();
          try {
            // before inserting we need to make sure that the station isn't already in db
            // Fetch stations with the name name in db
            const existingStation = await tables.station.readByAddress(
              row.adresse_station
            );
            // if the station doesn't exist already :
            if (existingStation.length === 0) {
              await tables.station.create({
                latitude: row.consolidated_longitude,
                longitude: row.consolidated_latitude,
                name: row.nom_station,
                address: row.adresse_station,
                price: 10,
                maxPower: 250,
                imgUrl: "/public/assets/stations/sample.jpg",
              });
            }
            // wether station was updated or not we need to add all plug//station pairs inside of the database

            // get the id of the station

            // get the type of plug based on the columns in the CSV
            if(row.prise_type_ef==="true"){
              console.info('type 1')
            } else if (row.prise_type_2==="true"){
              console.info('type 2')
            } else if (row.prise_type_combo_ccs==="true"){
              console.info('comboCCS')
            } else if (row.prise_type_chademo==="true"){
              console.info('type chademo')
            } 



            await tables.stationPlugs.create({
              stationId:2,
              plugId:1,
              maxPower: row.puissance_nominale,
              price: 10,
            });

            // resume stream - treat next line
            stream.resume();
          } catch (err) {
            console.info(err);
          }
        })
        .on("end", () => {
          // Respond with the stations in JSON format
          res.status(200).json("CSV file was successfully processed");
        });
    } else {
      res.status(400).json("Missing .csv file");
    }
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
