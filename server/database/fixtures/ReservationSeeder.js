const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");
const StationSeeder = require("./StationSeeder")


class ReservationSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "reservation", truncate: true, dependencies: [UserSeeder, StationSeeder] });
  }

  run() {
    // Insert Article
    this.insert({
      user_id : 1,
      station_id : 1 ,
      reservation_date : new Date(),
      duration : 30,
    });
    this.insert({
      user_id : 1,
      station_id : 2 ,
      reservation_date : new Date(),
      duration : 30,
    });
    this.insert({
      user_id : 2,
      station_id : 1 ,
      reservation_date : new Date(),
      duration : 30,
    });
  }
}

module.exports = ReservationSeeder;
