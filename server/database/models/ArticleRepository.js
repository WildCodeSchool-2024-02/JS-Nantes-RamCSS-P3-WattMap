const AbstractRepository = require("./AbstractRepository");

class ArticleRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "article" });
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

module.exports = ArticleRepository;
