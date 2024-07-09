import Input from "./Input";

export default function Modal() {
    // function close() {
    //     console.log("close");
    // }

    return (
        <dialog aria-labelledby="title_dialog" >
            <h1 id="title_dialog">Ajouter votre photo</h1>
            <form id='personForm' >
                <Input type="file" labelText="Photo" />
                <div className="d-md-flex justify-content-md-between">
                    <button type="button">Annuler</button>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </dialog>
    );
}