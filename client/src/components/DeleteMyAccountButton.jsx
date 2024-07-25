import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/modal.css";

export default function DeleteMyAccountButton() {
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
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      setFeedback("✅ Profil supprimé !");
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
        className="btn btn-cancel"
        type="button"
        aria-label="supprimer mon profil"
      >
        SUPPRIMER MON PROFIL
      </button>
      {isModalOpen && (
        <dialog className="modal" aria-labelledby="title_dialog">
          <div className="modal-content justify-content-between">
            <p className="title-modal" id="title_dialog">
              Voulez-vous réellement supprimer votre compte ?
              <br /> Cette action est irréversible.
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
                SUPPRIMER LE COMPTE
              </button>
            </section>
          </div>
        </dialog>
      )}
    </>
  );
}
