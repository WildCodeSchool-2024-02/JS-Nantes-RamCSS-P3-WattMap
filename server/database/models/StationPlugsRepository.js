const AbstractRepository = require("./AbstractRepository");

class StationPlugsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "station_plugs" });
  }

  // The C of CRUD - Create operation

  async create({ stationId, plugId, maxPower, price }) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (station_id,plug_id,max_power,price) values (?, ?, ?, ?)`,
      [stationId, plugId, maxPower, price]
    );

    /// TODO : find how NOT to put duplicate entries in ( if csv file is re-uploaded, does it mean the db needs to be dropped ? maybe just this table ? )

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readByStationId(id) {
    // Execute the SQL SELECT query to retrieve all the plugs from one particular station
    const [rows] = await this.database.query(`select id, station_id as stationId, plug_id as plugId, max_power as maxPower, price from ${this.table} where station_id=?`,[id]);

    // Return the array of items
    return rows;
  }

  async readQuantitiesByStationId(id) {
    // Execute the SQL SELECT query to retrieve all the plugs from one particular station
    const [rows] = await this.database.query(` select plug_id as plugId, max(max_power) as maxPower, avg(price) as price, count(id) as quantity from station_plugs where station_id=? group by plug_id`
,[id]);

    // Return the array of items
    return rows;
  }

  async deleteAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`delete from ${this.table}`);

    // Return the array of items
    return rows;
  }
}

module.exports = StationPlugsRepository;
