import "../styles/newsOverview.css";
import "../styles/globals.css";
// import { useLoaderData } from "react-router-dom";
import CardNews from "../components/CardNews";

export default function newsOverview() {
  // TODO : Map articles using this object
  // const articles= useLoaderData();

  return (
    <main className="cardNews">
      <h1 className="titreActu">NOS ACTUALITÉS</h1>
      <p className="pActu">fil-ariane</p>
      <CardNews />
      <CardNews />
      <CardNews />
    </main>
  );
}
