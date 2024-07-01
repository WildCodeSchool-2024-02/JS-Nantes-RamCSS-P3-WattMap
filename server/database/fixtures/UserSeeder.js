const argon2 = require("argon2");
const AbstractSeeder = require("./AbstractSeeder");
const StationSeeder = require("./StationSeeder")
const { hashingOptions } = require("../../app/services/auth"); 

const { SAMPLE_USER_EMAIL, SAMPLE_USER_PASSWORD, SAMPLE_ADMIN_EMAIL, SAMPLE_ADMIN_PASSWORD } = process.env;


class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true, dependencies: [StationSeeder]});
  }

  // The run method - Populate the 'user' table with fake data

  async run() {
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

    const adminPsk = await argon2.hash(SAMPLE_ADMIN_PASSWORD, hashingOptions)

    const sampleAdmin = {
      pseudo: "Admin", // Generate a fake display name
      firstname: this.faker.person.firstName(),
      lastname: this.faker.person.lastName(),
      email: SAMPLE_ADMIN_EMAIL , // Generate a fake email using faker library
      postcode: parseInt(this.faker.location.zipCode(),10), // the ,10 refers to base 10.
      city: this.faker.location.city(),
      password: adminPsk, // Generate a fake password using faker library
      birthdate: this.faker.date.birthdate(),
      is_admin: 1
    };

    // Insert the fakeUser data into the 'user' table
    this.insert(sampleAdmin); 

    const userPsk = await argon2.hash(SAMPLE_USER_PASSWORD, hashingOptions)

    const sampleUser = {
      pseudo: "User", // Generate a fake display name
      firstname: this.faker.person.firstName(),
      lastname: this.faker.person.lastName(),
      email: SAMPLE_USER_EMAIL , // Generate a fake email using faker library
      postcode: parseInt(this.faker.location.zipCode(),10), // the ,10 refers to base 10.
      city: this.faker.location.city(),
      password: userPsk, // Generate a fake password using faker library
      birthdate: this.faker.date.birthdate(),
      is_admin: 0
    };

    // Insert the fakeUser data into the 'user' table
    this.insert(sampleUser); 

  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
