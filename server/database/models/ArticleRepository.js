const AbstractRepository = require("./AbstractRepository");

class ArticleRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "article" });
  }

  // Create operation

  async create(article) {
    // the date is calculated right before the insertion
    const [result] = await this.database.query(
      `insert into ${this.table} (title, author_id, article_content, header_img_url, publication_date) values (?, ?, ?, ?, ?)`,
      [article.title, article.authorID, article.content, article.headerImgUrl , new Date()]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }


   // Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, author_id as authorId, title, article_content as content, header_img_url as headerImgUrl, publication_date as publicationDate from ${this.table}`
    );

    // Return the array of items
    return rows;
  }


  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select id, author_id as authorId, title, article_content as content, header_img_url as headerImgUrl, publication_date as publicationDate from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }
}

module.exports = ArticleRepository;
