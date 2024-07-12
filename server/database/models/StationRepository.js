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
    imgUrl,
  }) {
    // Execute the SQL INSERT query to add a new station to the "station" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, address, latitude, longitude, img_url) values (?, ?, ?, ?, ?)`,
      [name, address, latitude, longitude, imgUrl]
    );

    // Return the ID of the newly inserted station
    return result.insertId;
  }

  

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, name, address, latitude, longitude, img_url as imgUrl from ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific station by its ID
    const [rows] = await this.database.query(
      `select id, name, address, latitude, longitude, img_url as imgUrl from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the station
    return rows[0];
  }

  async readByAddress(search) {
    // Execute the SQL SELECT query to retrieve stations with the queried address "search"
    const [row] = await this.database.query(
      `select id, name, address, latitude, longitude, img_url as imgUrl from ${this.table} where address=?`,
      [search]
    );

    // Return the array of stations
    return row;
  }
}

module.exports = StationRepository;
