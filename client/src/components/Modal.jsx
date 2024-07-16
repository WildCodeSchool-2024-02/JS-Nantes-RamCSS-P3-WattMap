import { useRef } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

export default function Modal({ closeModal }) {
  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileInput = fileRef.current;
    const file = fileInput.files[0];

    if (!file) {
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
          credentials:"include"
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // TODO : Handle success response, give feedback
      
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }

    // Optionally close the modal after the file upload
    closeModal();
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
