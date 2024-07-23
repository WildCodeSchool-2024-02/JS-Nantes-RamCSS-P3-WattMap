const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "reservation" });
  }

  async create({ userId, stationId, date, duration }) {
    // Execute the SQL INSERT query to add a new station to the "station" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, station_id, date, duration) values (?, ?, ?, ?)`,
      [userId, stationId, date, duration]
    );

    // Return the ID of the newly inserted station
    return result.insertId;
  }

  async readByUserId(id) {
    const [rows] = await this.database.query(
      // this JOIN operation enables us to get the station information along with the reservation time and duration
      `select reservation.id, date, duration, station_id as stationId, name as stationName, address as stationAddress, img_url as stationImgUrl from ${this.table} inner join station on reservation.station_id = station.id where user_id=?`,
      [id]
    );
    return rows;
  }

  // The D of CRUD - Delete operation
  async delete(userId, reservationId) {
    // Execute the SQL INSERT query to add a new station to the "station" table
    const [result] = await this.database.query(
      `delete from ${this.table} where id=? and user_id=?`,
      [reservationId, userId]
    );

    // Return the ID of the newly inserted station
    return result.affectedRows;
  }
}

module.exports = ReservationRepository;
