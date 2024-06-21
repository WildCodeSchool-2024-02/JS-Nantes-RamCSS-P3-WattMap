import "../styles/newOverview.css";
import "../styles/globals.css";
import CardNews from "../components/CardNews";

export default function NewOverview() {
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
