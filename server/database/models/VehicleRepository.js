const AbstractRepository = require("./AbstractRepository");

class VehicleRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "vehicle" as configuration
    super({ table: "vehicle" });
  }

  // Create operation
  async create({ ownerId, brand, model, imgUrl }) {
    // Insert a new vehicle
    const [result] = await this.database.query(
      `insert into ${this.table} (owner_id, brand, model, img_url) values (?, ?, ?, ?)`,
      [ownerId, brand, model, imgUrl]
    );

    // Return the ID of the newly inserted vehicle
    return result.insertId;
  }

  // Update operation
  async update({ id, brand, model, imgUrl }) {
    let [result] = [];
    if (imgUrl) {
      [result] = await this.database.query(
        `update ${this.table} set brand = ?, model = ?, img_url = ? where id = ?`,
        [brand, model, imgUrl, id]
      );
    } else {
      [result] = await this.database.query(
        `update ${this.table} set brand = ?, model = ? where id = ?`,
        [brand, model, id]
      );
    }

    // Return the number of affected rows
    return result.affectedRows;
  }

  // Read operations
  async readById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readByOwnerId(ownerId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE owner_id = ?`,
      [ownerId]
    );

    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    // `SELECT * FROM ${this.table} JOIN user.id = id WHERE`,
    //   [ownerId]

    return rows;
  }

  // safe delete operation : the user can only delete his vehicles
  async delete(onwerId, id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where owner_id=? and id = ?`,
      [onwerId, id]
    );

    // Return the number of affected rows
    return result.affectedRows;
  }
}

module.exports = VehicleRepository;
