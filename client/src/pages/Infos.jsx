import { useLoaderData } from "react-router-dom";
import PlugInfos from "../components/PlugInfos";
import "../styles/Infos.css";

export default function Infos() {
  const plugTypes = useLoaderData();
  return (
    <main className="container">
      <h1 className="main-title">les différentes prises de recharges</h1>
      <p className="fil-page">fil-ariane</p>
      <p className="nos-prise">Voici nos prises de recharges disponible</p>
      <ul className="d-flex flex-row flex-wrap  justify-content-center list-unstyled">
        {plugTypes.map((item) => (
          <li key={item.id}>
            <PlugInfos plugType={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
