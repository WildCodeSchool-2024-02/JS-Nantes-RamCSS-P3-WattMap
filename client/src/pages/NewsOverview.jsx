/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
import "../styles/newsOverview.css";
import "../styles/globals.css";
import { useLoaderData } from "react-router-dom";
import CardNews from "../components/CardNews";

export default function newsOverview() {
  // TODO : Map articles using this object
  const articles = useLoaderData();


  return (
    <main className="cardNews">
      <h1 className="titreActu">NOS ACTUALITÉS</h1>
      <p className="pActu">fil-ariane</p>

      {articles.map((articles) => (
        <CardNews
          key={articles.id}
          title={articles.title}
          content={articles.content }
          date={articles.publication_date}
          imageUrl={articles.imageUrl}
        />
      ))}
    </main>
  );
}
