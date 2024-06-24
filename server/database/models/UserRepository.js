const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // Create operation

  async create({pseudo, firstname, lastname, password, email}) {
    // The user doesn't need to secify all of his information in order to create an account. 
    const [result] = await this.database.query(
      `insert into ${this.table} (pseudo, firstname, lastname, password, email, is_admin ) values (?, ?, ?, ?, ?)`,
      [pseudo, firstname, lastname, password, email, 0]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }
}

module.exports = UserRepository;