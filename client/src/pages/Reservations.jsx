import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SwitchBtn from '../components/SwitchBtn';
import FutureReservations from '../components/FutureReservations';
import PastReservations from '../components/PastReservations';


export default function Reservations() {
  const reservations = useLoaderData();
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
      {isNew ? <PastReservations reservations={reservations} /> : <FutureReservations reservations={reservations} />}
    </main>
  );
}
