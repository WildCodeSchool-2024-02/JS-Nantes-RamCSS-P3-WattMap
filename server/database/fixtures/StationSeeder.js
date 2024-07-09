const AbstractSeeder = require("./AbstractSeeder");

class StationSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "station", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    this.insert({
      user_id: 1,
      station_id: 5,
      reservation_date: new Date(),
      duration: 30,
    });
  }
}
module.exports = StationSeeder;
