import { useRef, useState } from "react";
import Input from "./Input";

export default function UploadFIleAdmin() {
    const fileRef = useRef();

    // used to give feedback to the user when he has upload a file
    const [isPending, setIsPending] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);

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
                `${import.meta.env.VITE_API_URL}/api/stations/upload`,
                {
                    method: "POST",
                    body: formData,
                    credentials: "include",
                }
            );

            if (!response.ok) {
                setFeedback("❌ Erreur dans l'envoi du fichier");
                throw new Error("Network response was not ok : fichier admin");
            } else {
                setFeedback("✅ Fichier envoyé avec succès !");

            }
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }

    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <Input type="file" labelText="Photo" reference={fileRef} />
            <button
                type="submit"
                disabled={isPending}
                className="btn btn-default mt-3"
            >
                {isPending ? ("Communication avec le serveur ...") : ("Envoyer un fichier .csv")}
            </button>
            {feedback}
        </form>
    );
}
