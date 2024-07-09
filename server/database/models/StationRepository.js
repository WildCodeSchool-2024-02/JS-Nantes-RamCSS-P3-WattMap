const AbstractRepository = require("./AbstractRepository");

class StationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "station" });
  }

  async create({
    name,
    address,
    latitude,
    longitude,
    price,
    maxPower,
    imgUrl,
  }) {
    // Execute the SQL INSERT query to add a new station to the "station" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, address, latitude, longitude,  price, max_power, img_url) values (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, latitude, longitude, price, maxPower, imgUrl]
    );

    // Return the ID of the newly inserted station
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, name, address, latitude, longitude,  price, max_power as maxPower, img_url as imgUrl from ${this.table}`
    );

    // Return the array of items
    return rows;
  }
}

module.exports = StationRepository;
