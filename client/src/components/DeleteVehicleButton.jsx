import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/modal.css";

export default function DeleteVehicleButton({ vehicleId = 0 }) {
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
      `${import.meta.env.VITE_API_URL}/api/vehicles/${vehicleId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (response.ok) {
      setFeedback("✅ Véhicule supprimé !");
      setTimeout(closeModal, 1000);
      // reload the page to see the changes, we can't perform a hard refresh since we're in an SPA so we'll navigate to the page we're already in
      setTimeout(() => navigate("/profile"), 1200);
    } else {
      setFeedback("❌ Erreur dans la suppression");
    }
  }

  return (
    <>
      <button
        onClick={openModal}
        className="btn btn-profile-delete"
        type="button"
        aria-label="annuler la réservation"
      >
        SUPPRIMER
      </button>
      {isModalOpen && (
        <dialog
          id={`dialog-${vehicleId}`}
          className="modal"
          aria-labelledby="title_dialog"
        >
          <div className="modal-content justify-content-between">
            <p className="title-modal" id="title_dialog">
              Voulez-vous supprimer ce véhicule ?
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
                className="btn btn-default"
                type="button"
                aria-label="valider l'annulation"
              >
                SUPPRIMER LE VÉHICULE
              </button>
            </section>
          </div>
        </dialog>
      )}
    </>
  );
}

DeleteVehicleButton.propTypes = {
  vehicleId: PropTypes.number.isRequired,
};
