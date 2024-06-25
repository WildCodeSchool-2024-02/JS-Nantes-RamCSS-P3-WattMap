import { useLoaderData } from "react-router-dom";
import PlugInfos from "../components/PlugInfos";

export default function Infos() {
  const plugTypes = useLoaderData();
  return (
    <>
      <h1>je suis dans la page infos prises</h1>
      <h2>ici le map</h2>
      <PlugInfos plugType={plugTypes[2]} />
      <PlugInfos plugType={plugTypes[3]} />
      <PlugInfos plugType={plugTypes[4]} />
    </>
  );
}
