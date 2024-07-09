const AbstractSeeder = require("./AbstractSeeder");

class StationSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "station", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    this.insert({
      name:"A55 - Aire de Gignac Rebuty (direction Martigues)",
      address:'A55 - Aire de Gignac Rebuty 13740 Le Rove',
      latitude: 5.25626,
      longitude: 43.3922,
      price:10,
      max_power:250,
      img_url:'/public/assets/stations/sample.jpg'
     });

     this.insert({
      name:"Gradignan - Hôtel Campanile",
      address:'1 allée des demoiselles 33700 Gradignan',
      latitude: -0.602809,
      longitude: 44.7903,
      price:10,
      max_power:250,
      img_url:'/public/assets/stations/sample.jpg'
     });
  }
}
module.exports = StationSeeder;
