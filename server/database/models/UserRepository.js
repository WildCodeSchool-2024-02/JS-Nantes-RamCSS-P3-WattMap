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

    // This is supposed to be a PATCH operation so we'll dynamically construct the query and the corresponding params
    const query = []
    const params = [];

    if (firstname) {
        query.push(' firstname = ?');
        params.push(firstname);
    }
    if (lastname) {
        query.push(' lastname = ?');
        params.push(lastname);
    }
    if (imgUrl) {
        query.push(' img_url = ?');
        params.push(imgUrl);
    }

    params.push(id);

    // the join operation reconstructs the correct query
    const [result] = await this.database.query(`update ${this.table} set ${query.join(',')} where id = ?`, params);

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
      `SELECT pseudo, email, is_admin as isAdmin, img_url as imgUrl, firstname, lastname FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);
    // Return the array of items
    return rows;
  }
}

module.exports = UserRepository;
