import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SwitchBtn from '../components/SwitchBtn';


export default function Reservations() {
  const reservations = useLoaderData();
  const [isNew, setIsNew] = useState(false);

  console.warn(reservations)

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
      {isNew ? "OLD" : "NEW"}
    </main>
  );
}
