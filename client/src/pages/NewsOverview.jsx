/* eslint-disable react-hooks/rules-of-hooks */
import "../styles/newsOverview.css";
import "../styles/globals.css";
import { useLoaderData } from "react-router-dom";
import CardNews from "../components/CardNews";
import Footer from "../components/Footer";

export default function newsOverview() {
  // TODO : Map articles using this object
  const articles = useLoaderData();

  return (
    <>
      <main className="container cardNews">
        <h1 className="titreActu">NOS ACTUALITÉS</h1>
        {articles.map((article) => (
          <CardNews
            key={article.id}
            title={article.title}
            content={article.content}
            date={article.publication_date}
            imageUrl={article.headerImgUrl}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
