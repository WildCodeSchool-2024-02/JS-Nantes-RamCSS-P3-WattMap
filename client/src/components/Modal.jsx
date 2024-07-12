import PropTypes from "prop-types";
import Input from "./Input";

export default function Modal({ closeModal }) {
    // function close() {
    //     console.log("close");
    // }

    return (
        <dialog className="modal" aria-labelledby="title_dialog" >
            <h2 className="title-modal" id="title_dialog">Ajouter votre photo</h2>
            <form id='personForm' className="form" >
                <Input type="file" labelText="Photo" />
                <div className="d-md-flex justify-content-md-between mt-2">
                    <button onClick={closeModal} type="button" className="btn btn-disable">Annuler</button>
                    <button type="submit" className="btn btn-default">Envoyer</button>
                </div>
            </form>
        </dialog>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};
