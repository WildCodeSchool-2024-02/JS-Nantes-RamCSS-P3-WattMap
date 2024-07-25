import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/modal.css";

export default function CancelReservationButton({ reservationId = 0 }) {
  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleCancel() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/reservations/${reservationId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (response.ok) {
      setFeedback("✅ Reservation annulée avec succès !");
      setTimeout(closeModal, 2000);
      // reload the page to see the changes, we can't perform a hard refresh since we're in an SPA so we'll navigate to the page we're already in
      setTimeout(() => navigate("/bookings"), 2200);
    } else {
      setFeedback("❌ Erreur dans l'annulation.");
    }
  }

  return (
    <>
      <button
        onClick={openModal}
        className="btn btn-cancel"
        type="button"
        aria-label="annuler la réservation"
      >
        ANNULER
      </button>
      {isModalOpen && (
        <dialog
          id={`dialog-${reservationId}`}
          className="modal"
          aria-labelledby="title_dialog"
        >
          <div className="modal-content justify-content-between">
            <p className="title-modal" id="title_dialog">
              Voulez-vous annuler cette réservation ?
            </p>
            <p>{feedback}</p>
            <section className="w-100 d-flex justify-content-between">
              <button
                onClick={closeModal}
                className="btn btn-disable"
                type="button"
                aria-label="retour"
              >
                RETOUR
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-cancel"
                type="button"
                aria-label="valider l'annulation"
              >
                ANNULER MA RESERVATION
              </button>
            </section>


          </div>
        </dialog>
      )}
    </>
  );
}

CancelReservationButton.propTypes = {
  reservationId: PropTypes.number.isRequired,
};
