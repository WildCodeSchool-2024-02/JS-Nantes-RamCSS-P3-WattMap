const AbstractRepository = require("./AbstractRepository");

class PlugTypeRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "plug_type" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select type, img_url as imgUrl,max_power as maxPower from ${this.table}`);

    // Return the array of items
    return rows;
  }



}

module.exports = PlugTypeRepository;
