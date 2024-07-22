import PropTypes from "prop-types";

export default function CancelReservationButton({ reservationId = 0 }) {
  function handleClick() {
    // Get the dialog element corresponding to the right id and show it
    const dialog = document.getElementById(`dialog-${reservationId}`);
    dialog.show();
  }

  async function handleCancel() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/reservations/${reservationId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const dialog = document.getElementById(`dialog-${reservationId}`);
    if (response.ok) {
      dialog.close();
    } else {
      console.warn(response);
    }
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="btn btn-contour"
        type="button"
        aria-label="annuler la réservation"
      >
        ANNULER
      </button>

      <dialog id={`dialog-${reservationId}`}>
        <p>Voulez-vous annuler cette réservation ?</p>
        <button
          onClick={handleCancel}
          className="btn btn-contour"
          type="button"
          aria-label="valider l'annulation"
        >
          ANNULER MA RESERVATION
        </button>
      </dialog>
    </>
  );
}

CancelReservationButton.propTypes = {
  reservationId: PropTypes.number.isRequired,
};
