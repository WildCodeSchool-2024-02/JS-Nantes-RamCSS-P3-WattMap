const fs = require("fs");
const csv = require("csv-parser");

const AbstractSeeder = require("./AbstractSeeder");

class StationSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "station", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    fs.createReadStream("./database/Stations2.csv")
      .pipe(csv())
      .on("data", (row) => {
        try {
          this.insert({
            latitude: row.consolidated_longitude,
            longitude: row.consolidated_latitude,
            name: row.nom_station,
            address: row.adresse_station,
            price: 10,
            max_power: 250,
            img_url: "/public/assets/stations/sample.jpg",
          });
        } catch (err) {
          console.info(err);
        }

        const values = [
          row.nom_station,
          row.adresse_station,
          row.coordonneesXY,
        ];
        console.info(values);
      })
      .on("end", () => {
        // console.log("CSV file successfully processed");
      });
  }
}

module.exports = StationSeeder;
