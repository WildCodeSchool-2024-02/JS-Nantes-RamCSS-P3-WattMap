import { useLoaderData } from "react-router-dom";
import CardStation from "../components/CardStation";
import DatePicker from "../components/DatePicker";

function Station() {
  const station = useLoaderData();

  // This function will generate an array of 7 dates for the upcoming week
  function generateWeekDates() {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i+=1) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  }

  return (
    <main className="p-3">
      <h1>Réservation</h1>
      <CardStation displayMode={1} station={station} />
      {generateWeekDates().map((date) => (
        <DatePicker key={date} day={date} />
      ))}
    </main>
  );
}

export default Station;
