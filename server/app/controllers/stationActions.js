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
    const rawStations = await tables.station.readAll();

    // for every station, query the database for associated plugs and add them to the returned object
    const refinedStations = await Promise.all(
      rawStations.map( async (station) => {
      const plugs = await tables.stationPlugs.readByStationId(station.id)
      return{...station,plugs}
    }))
    
    // Respond with the stations in JSON format
    res.status(200).json(refinedStations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch all stations from the database
    const rawStation = await tables.station.read(req.params.id);

    // for this station, query the database for associated plugs and add them to the returned object
    const plugs = await tables.stationPlugs.readByStationId(rawStation.id);
    const refinedStation = {...rawStation,plugs};
    
    // Respond with the stations in JSON format
    res.status(200).json(refinedStation);
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

      // first we need to delete all entries in the table station_plugs
      // otherwise we would get duplicates
      await tables.stationPlugs.deleteAll()

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

            // this will be used later as a foreign key for plug types
            // if station already exists, we get its id, otherwise we get the inserted id
            let stationId = 0;

            // if the station doesn't exist already :
            if (existingStation.length === 0) {
              stationId = await tables.station.create({
                latitude: row.consolidated_longitude,
                longitude: row.consolidated_latitude,
                name: row.nom_station,
                address: row.adresse_station,
                price: 10,
                maxPower: 250,
                imgUrl: "/public/assets/stations/sample.jpg",
              });
            } else {
              stationId = existingStation[0].id
            }
            // wether station was updated or not we need to add all plug//station pairs inside of the database

            // get the type of plug based on the columns in the CSV
            let plugId = null
            if (row.prise_type_ef === "true") {
              plugId=1
            } else if (row.prise_type_2 === "true") {
              plugId=2
            } else if (row.prise_type_combo_ccs === "true") {
              plugId=3
            } else if (row.prise_type_chademo === "true") {
              plugId=4
            }

            await tables.stationPlugs.create({
              stationId,
              plugId,
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
  read,
  addMany,
};
