const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeUser = {
        pseudo: this.faker.internet.displayName(), // Generate a fake display name
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        email: this.faker.internet.email(), // Generate a fake email using faker library
        postcode: parseInt(this.faker.location.zipCode(),10), // the ,10 refers to base 10.
        city: this.faker.location.city(),
        password: this.faker.internet.password(), // Generate a fake password using faker library
        birthdate: this.faker.date.birthdate()
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeUser); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;


// pseudo varchar(255) not null,
// firstname varchar(255),
// lastname varchar(255),
// password varchar(255) not null,
// email varchar(255) not null unique,
// postcode INT,
// city varchar(255),
// birthdate DATE,
// is_admin tinyint not null default 0