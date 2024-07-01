const AbstractSeeder = require("./AbstractSeeder");

class PlugTypeSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "plug_type", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert plug types data into table 'plug_type'
    this.insert({
      type: "type 1",
      img_url: "/assets/images/plugTypeIcons/chademo.svg",
      max_power: 100,
    });
    this.insert({
      type: "type 2",
      img_url: "/assets/images/plugTypeIcons/type2.svg",
      max_power: 100,
    });
    this.insert({
      type: "chademo",
      img_url: "/assets/images/plugTypeIcons/combocss.svg",
      max_power: 100,
    });
    this.insert({
      type: "combo CSS",
      img_url: "/assets/images/plugTypeIcons/chademo.svg",
      max_power: 100,
    });
    this.insert({
      type: "Tesla",
      img_url: "/assets/images/plugTypeIcons/tesla.svg",
      max_power: 100,
    });
  }
}

module.exports = PlugTypeSeeder;
