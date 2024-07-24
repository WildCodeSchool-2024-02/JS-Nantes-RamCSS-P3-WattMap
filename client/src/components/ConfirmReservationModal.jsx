import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ConfirmReservationModal({ dateTime, closeModal }) {
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/reservations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ stationId: 3, date: dateTime, duration: 30 }),
      }
    );

    if (response.ok) {
      setFeedback("✅ Réservation confirmée !");
      setTimeout(closeModal, 2000);
      // reload the page to see the changes, we can't perform a hard refresh since we're in an SPA so we'll navigate to the page we're already in
      setTimeout(() => navigate("/bookings"), 2200);
    } else {
      setFeedback("❌ Erreur dans la réservation.");
    }
  };

  // used to display the date in a human readable way
  const displayOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <dialog className="modal" id="confirm-reverservation-modal">
      <form className="w-100 d-flex flex-column align-items-center">
        <p>
          tu veux-tu réserver ?{" "}
          {dateTime.toLocaleDateString("fr-FR", displayOptions)}
        </p>
        <section className="w-100 d-md-flex justify-content-md-between mt-2">
          <button
            className="btn btn-disable"
            onClick={closeModal}
            type="button"
          >
            RETOUR
          </button>
          <button
            onClick={handleSubmit}
            className="btn btn-default"
            type="submit"
          >
            CONFIRMER
          </button>
        </section>
        <p>{feedback}</p>
      </form>
    </dialog>
  );
}

ConfirmReservationModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
};
