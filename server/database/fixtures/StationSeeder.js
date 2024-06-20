const AbstractSeeder = require("./AbstractSeeder");

class StationSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "station", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {

    // Insert stations
    this.insert({ latitude:1,
      longitude:1,
      name:"carpentras",
      address:'3 rue du capybara',
      price:10,
      max_power:250,
      img_url:'/public/assets/stations/sample.jpg'
     });

     this.insert({ latitude: 48.8650994,
      longitude: 2.3963304,
      name:"Paris Recharge",
      address:'6 rue du capybara',
      price:10,
      max_power:250,
      img_url:'/public/assets/stations/sample.jpg'
     });
  }
}

module.exports = StationSeeder;
