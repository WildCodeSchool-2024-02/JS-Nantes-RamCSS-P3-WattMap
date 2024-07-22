import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Input from "./Input";

export default function Modal({ closeModal }) {
  const fileRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileInput = fileRef.current;
    const file = fileInput.files[0];

    if (!file) {
      // TODO : give the user a feedback inside of the modal
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/edit`,
        {
          method: "PATCH",
          body: formData,
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        // reload the page to see the changes, we can't perform a hard refresh since we're in an SPA so we'll navigate to the page we're already in
        // it gives the user instant feedback on his image upload
        navigate("/profile/edit");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }

    // close the modal with a little delay, to make it a little prettier
    setTimeout(() => closeModal(), 300);
  };

  return (
    <dialog className="modal" aria-labelledby="title_dialog">
      <h2 className="title-modal" id="title_dialog">
        Ajouter votre photo
      </h2>
      <form id="personForm" className="form">
        <Input type="file" labelText="Photo" reference={fileRef} />
        <div className="d-md-flex justify-content-md-between mt-2">
          <button
            onClick={closeModal}
            type="button"
            className="btn btn-disable"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="btn btn-default"
            onClick={handleSubmit}
          >
            Envoyer
          </button>
        </div>
      </form>
    </dialog>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
