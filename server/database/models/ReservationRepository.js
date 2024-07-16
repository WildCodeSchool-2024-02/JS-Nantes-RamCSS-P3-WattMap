const AbstractRepository = require("./AbstractRepository");

class ReservationRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "reservation" });
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
