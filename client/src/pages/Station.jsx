import { useLoaderData } from "react-router-dom";
import CardStation from "../components/CardStation";
import DatePicker from "../components/DatePicker";


function Station() {
  const station = useLoaderData();

  return (
    <main className="p-3">
      <h1>Réservation</h1>
      <CardStation displayMode={1} station={station}/>
      <DatePicker />
    </main>
  );
}

export default Station;
