import { useLoaderData } from "react-router-dom";
import CardStation from "../components/CardStation";


function Station() {
  const station = useLoaderData();

  return (
    <main className="p-3">
      <h1>Réservation</h1>
      <CardStation displayMode={1} station={station}/>
    </main>
  );
}

export default Station;
