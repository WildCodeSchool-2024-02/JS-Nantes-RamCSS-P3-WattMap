import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardStation from "../components/CardStation";
import DatePicker from "../components/DatePicker";
import ConfirmReservationModal from "../components/ConfirmReservationModal";

function Station() {
  // This is the station as fetched from the backend
  const station = useLoaderData();

  // This state is used to open and close the modal that confirms the reservation
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // This state is used to keep track of the selected date and time for the reservation
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  // This function will generate an array of 7 dates for the upcoming week
  function generateWeekDates() {
    const dates = [];
    const today = new Date();
    // i+=1 is weird but the linter doesn't like i++
    for (let i = 0; i < 7; i += 1) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  }

  // the key in the DatePicker seems weird, it is a 3 digit number.
  return (
    <main className="container p-3">
      <h1>Réservation</h1>
      <CardStation displayMode={1} station={station} />
      {generateWeekDates().map((date) => (
        <DatePicker
          key={date}
          day={date}
          openModal={() => setModalIsOpen(true)}
          setDateTime={setSelectedDateTime}
        />
      ))}
      {modalIsOpen && (
        <ConfirmReservationModal dateTime={selectedDateTime} closeModal={() => setModalIsOpen(false)} />
      )}
    </main>
  );
}

export default Station;
