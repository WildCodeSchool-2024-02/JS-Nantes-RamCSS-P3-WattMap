import PropTypes from "prop-types";

export default function ConfirmReservationModal({ closeModal }) {
  return (
    <dialog className="modal" id="confirm-reverservation-modal">
      <form>
        <p>tu veux-tu réserver ?</p>
        <button onClick={closeModal} type="button">
          RETOUR
        </button>
        <button type="button"> CONFIRMER </button>
      </form>
    </dialog>
  );
}

ConfirmReservationModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
