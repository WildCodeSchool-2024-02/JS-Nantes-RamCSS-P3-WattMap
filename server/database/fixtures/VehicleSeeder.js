const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

class VehicleSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "vehicle", truncate: true, dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'vehicle' table with fake data

  async run() {
    // Generate and insert fake data into the 'vehicle' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake vehicle data
      const fakeVehicle = {
        owner_id: this.faker.number.int({ min: 1, max: 4 }),
        brand: this.faker.vehicle.manufacturer(),
        model: this.faker.vehicle.model(),
        img_url: this.faker.image.url(), // Generate a fake email using faker library
      };

      // Insert the fakeVehicle data into the 'vehicle' table
      this.insert(fakeVehicle); // insert into vehicle(email, password) values (?, ?)
    }

  }
}

// Export the VehicleSeeder class
module.exports = VehicleSeeder;
