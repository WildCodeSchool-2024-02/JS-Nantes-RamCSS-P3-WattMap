const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "reservation" });
  }

  async create({
    userId,
    stationId
  }) {
    // Execute the SQL INSERT query to add a new station to the "station" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, station_id) values (?, ?)`,
      [userId,stationId]
    );

    // Return the ID of the newly inserted station
    return result.insertId;
  }

  async readByUserId(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where user_id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = ReservationRepository;
