const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "reservation" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, name, address, latitude, longitude,  price, max_power as maxPower, img_url as imgUrl from ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  async readByAddress(search) {
    // Execute the SQL SELECT query to retrieve stations with the queried address "search" 
    const [row] = await this.database.query(
      `select id, name, address, latitude, longitude,  price, max_power as maxPower, img_url as imgUrl from ${this.table} where address=?`,
      [search]
    );

    // Return the array of stations
    return row;
  }
}

module.exports = ReservationRepository;
