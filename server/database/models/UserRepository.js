const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // Create operation

  async create({ pseudo, hashedPassword, email }) {
    // The user doesn't need to secify all of his information in order to create an account.
    const [result] = await this.database.query(
      `insert into ${this.table} (pseudo, password, email, is_admin ) values (?, ?, ?, ?)`,
      [pseudo, hashedPassword, email, 0]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // read operations

  // Update operation
  async update({ id, firstname, lastname, imgUrl }) {
    let [result] =[]
    if (imgUrl) {
      [result] = await this.database.query(
        `update ${this.table} set img_url = ?, firstname = ?, lastname = ? where id = ?`,
        [imgUrl, firstname, lastname, id]
      );
    } else {
      [result] = await this.database.query(
        `update ${this.table} set firstname = ?, lastname = ? where id = ?`,
        [firstname, lastname, id]
      );
    }

    // Return the ID of the newly inserted user
    return result.affectedRows;
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return rows[0];
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }
}

module.exports = UserRepository;
