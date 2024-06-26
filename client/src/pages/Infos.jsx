import { useLoaderData } from "react-router-dom";
import PlugInfos from "../components/PlugInfos";
import "../styles/Infos.css"

export default function Infos() {
  const plugTypes = useLoaderData();
  return (
    <>
      <h1>je suis dans la page infos prises</h1>
      <ul>
        {plugTypes.map((item) => (<li key={item.type}><PlugInfos plugType={item} /></li>))}
      </ul>

    </>
  );
}
