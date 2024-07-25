const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

const date = new Date("December 17, 1995 13:24:00");

class ArticleSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "article", truncate: true, dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Insert Article
    this.insert({
      title: " R5 E-Tech en mode pop",
      article_content:
        "En préambule du lancement de sa nouvelle R5 E-Tech, Renault a décidé d’offrir un écrin résolument pop à sa future citadine électrique.",
      header_img_url:
        "/assets/images/articles/Article2.jpeg",
      publication_date: date,
      author_id: 1,
    });

    this.insert({
      title:
        "Xiaomi a réussi là où Apple a échoué : construire une voiture électrique ",
      article_content:
        "PÉKIN — Xiaomi est une entreprise chinoise connue pour ses cuiseurs à riz, ses robots aspirateurs, ses purificateurs d’air et ses smartphones. Aujourd’hui, elle a réussi là où Apple, son rival de longue date, a échoué : fabriquer une voiture électrique et la commercialiser.",
      header_img_url:
        "/assets/images/articles/Article3.JPG",
      publication_date: date,
      author_id: 1,
    });
    
    this.insert({
      title: "Tesla compte sur une voiture à bas coût pour se relancer",
      article_content:
        " Les faits Tesla a subi un effondrement de 55% de son bénéfice net au premier trimestre 2024, le chiffre d’affaires et la production sont en baisse sur un an. Une semaine après avoir annoncé la suppression de plus de 10% de ses salariés au niveau mondial, Elon Musk promet d’avancer le lancement de nouveaux modèles, notamment un véhicule à bas coût « aussi vite que possible ».Touché, mais pas coulé. Si Tesla a vu ses ventes chuter de 9% au premier trimestre sur un an, et son profit net fondre de 55 %, Elon Musk a limité la casse boursière en promettant, mardi, la sortie d’un véhicule électrique à bas coût « aussi vite que possible ». Le constructeur a déjà commencé à baisser ses prix pour séduire de nouveaux clients car la guerre commerciale bat son plein avec la Chine. A maintes reprises, le patron de Tesla a dit vouloir rendre ses produits « affordable » (abordable). Mais face à la déprime de son chiffre d’affaires - et de l’action Tesla, qui a fondu de 40% cette année -, il change de braquet comme il sait si bien le faire.",
      header_img_url:
        "/assets/images/articles/Tesla.jpg",
      publication_date: date,
      author_id: 1,
    });
  }
}

module.exports = ArticleSeeder;
