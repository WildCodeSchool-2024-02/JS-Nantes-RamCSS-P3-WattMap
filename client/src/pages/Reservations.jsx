import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SwitchBtn from "../components/SwitchBtn";
import FutureReservations from "../components/FutureReservations";
import PastReservations from "../components/PastReservations";

export default function Reservations() {
  const reservations = useLoaderData();

  // these consts enable us to separate past from future reservations, based on their date.
  const pastReservations = reservations.filter(
    (reservation) => new Date(reservation.date) < new Date()
  );
  const futureReservations = reservations.filter(
    (reservation) => new Date(reservation.date) > new Date()
  );

  // this state is used to control the SwitchBtn component
  const [isNew, setIsNew] = useState(false);

  function toggle() {
    setIsNew(!isNew);
  }

  return (
    <main className="form-container">
      <SwitchBtn
        labelTrue="PASSÉES"
        labelFalse="À VENIR"
        state={isNew}
        toggleFunction={() => toggle()}
      />
      {isNew ? (
        <PastReservations reservations={pastReservations} />
      ) : (
        <FutureReservations reservations={futureReservations} />
      )}
    </main>
  );
}
