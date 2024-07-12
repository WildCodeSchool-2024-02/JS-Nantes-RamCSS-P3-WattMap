import { useLoaderData } from "react-router-dom";
import CardStation from "../components/CardStation";

function Station() {
  const station = useLoaderData();

  return (
    <main>
      <h1>Hello from {station.name}</h1>
      <CardStation displayMode={1} station={station} />
    </main>
  );
}

export default Station;
