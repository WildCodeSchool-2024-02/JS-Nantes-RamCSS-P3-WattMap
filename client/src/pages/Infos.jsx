import { useLoaderData } from "react-router-dom";
import PlugInfos from "../components/PlugInfos";
import "../styles/Infos.css";

export default function Infos() {
  const plugTypes = useLoaderData();
  return (
    <main className="container">
      <h1 className="different-charge">les différentes prises de recharges</h1>
      <p className="">fil-ariane</p>
      <ul className="flex-row list-unstyled">
        {plugTypes.map((item) => (
          <li key={item.id}>
            <PlugInfos plugType={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
