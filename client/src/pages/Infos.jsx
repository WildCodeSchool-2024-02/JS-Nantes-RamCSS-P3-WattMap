import { useLoaderData } from "react-router-dom";
import PlugInfos from "../components/PlugInfos";
import Footer from "../components/Footer"
import "../styles/Infos.css";

export default function Infos() {
  const plugs = useLoaderData();
  return (<>
    <main className="container">
      <h1 className="main-title">les différentes prises de recharges</h1>

      <p className="type-prise">Voici un aperçu des différents types de prises de recharge, que vous pourrez trouver sur les bornes :</p>
      <ul className="d-flex flex-row flex-wrap justify-content-center list-unstyled gap-3 mt-4">
        {plugs.map((plug) => (
          <li key={plug.id}>
            <PlugInfos plug={plug} compact={false} />
          </li>
        ))}
      </ul>
    </main>
    <Footer />
    </>
  );
}
