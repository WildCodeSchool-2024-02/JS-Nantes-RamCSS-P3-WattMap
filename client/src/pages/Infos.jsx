import { useLoaderData } from "react-router-dom";
import PlugInfos from "../components/PlugInfos";
import "../styles/Infos.css"

export default function Infos() {
  const plugTypes = useLoaderData();
  return (
    <main className="container">
      <h1>je suis dans la page infos prises</h1>
        <ul className="flex-row list-unstyled">
          {plugTypes.map((item) => (<li key={item.id}><PlugInfos plugType={item} /></li>))}
        </ul>
    </main>
  );
}
