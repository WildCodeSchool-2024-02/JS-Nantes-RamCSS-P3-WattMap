import PropTypes from "prop-types";

export default function ConfirmReservationModal({ closeModal }) {

const handleSubmit = async (e)=>{
e.preventDefault();
}


  return (
    <dialog className="modal" id="confirm-reverservation-modal">
      <form className="w-100 d-flex flex-column align-items-center">
        <p>tu veux-tu réserver ?</p>
        <section className="w-100 d-md-flex justify-content-md-between mt-2">
          <button
            className="btn btn-disable"
            onClick={closeModal}
            type="button"
          >
            RETOUR
          </button>
          <button onClick={handleSubmit}className="btn btn-default" type="submit">
            CONFIRMER
          </button>
        </section>
      </form>
    </dialog>
  );
}

ConfirmReservationModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
