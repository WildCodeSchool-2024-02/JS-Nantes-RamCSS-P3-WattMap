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
    // Insert stations
    this.insert({
      latitude: 1,
      longitude: 1,
      name: "carpentras",
      address: "3 rue du capybara",
      price: 10,
      max_power: 250,
      img_url: "/public/assets/stations/sample.jpg",
    });

    this.insert({
      latitude: 48.8650994,
      longitude: 2.3963304,
      name: "Paris Recharge",
      address: "6 rue du capybara",
      price: 10,
      max_power: 250,
      img_url: "/public/assets/stations/sample.jpg",
    });

    fs.createReadStream('./database/Stations.csv')
      .pipe(csv())
      .on("data", (row) => {
        const values = [row.nom_station];
        console.info(values);
      })
      .on("end", () => {
       // console.log("CSV file successfully processed");
      });
  }
}

module.exports = StationSeeder;


// create table station (
//   id int unsigned primary key auto_increment not null,
//   latitude float not null,
//   longitude float not null,
//   name varchar(255) not null,
//   address varchar(255) not null,
//   price INT,
//   max_power INT,
//   img_url varchar(255)
// );