export default function ConfirmReservationModal() {
  return (
    <dialog className="modal" id="confirm-reverservation-modal">
      <form>
        <p>tu veux-tu réserver ?</p>
        <button type="button"> RETOUR </button>
        <button type="button"> CONFIRMER </button>
      </form>
    </dialog>
  );
}
