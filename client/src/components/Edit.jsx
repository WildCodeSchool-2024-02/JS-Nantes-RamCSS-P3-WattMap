import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Input from "./Input";

export default function Edit({ profileUSerData }) {
    // console.log('%c⧭profileUSerData inside', 'color: #00e600', profileUSerData);

    // refs are used in order to not trigger a re-render everytime the content of inputs change
    const pseudoRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    // console.log('%c⧭', 'color: #aa00ff', profileUSerData.email);
    // console.log('%c⧭ lastNameRef', 'color: #00a3cc', lastNameRef);

    // used to give feedback to the user when logging in
    const [isPending, setIsPending] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleFetch = async (data) => {
        setIsPending(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        setTimeout(() => {
            setIsPending(false);
        }, 500); // this timeout is used to show the spinner

        if (response.ok) {
            const res = await response.json();
            console.info(res);
            setFeedback("✅ Compte créé avec succès !");
        } else {
            setFeedback(
                "❌ Erreur dans la création de votre compte, vérifiez vos informations"
            );
        }
    };
    function validate(pseudo) {
        if (!pseudo) {
            setFeedback("❌ votre pseudo ne peut pas être vide");
            return false;
        }

        return true;
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const pseudo = pseudoRef.current.value;
            const firstName = firstNameRef.current.value;
            const lastName = lastNameRef.current.value;

            const formDataisValid = validate(pseudo);

            if (formDataisValid) {
                await handleFetch({ pseudo, firstName, lastName });
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <Input
                type="text"
                labelText="Pseudo*"
                reference={pseudoRef}
                value={profileUSerData.pseudo}
            />
            <Input
                type="text"
                labelText="Prénom"
                reference={firstNameRef}
                value={profileUSerData.firstname}
            />
            <Input
                type="text"
                labelText="Nom"
                reference={lastNameRef}
                value={profileUSerData.lastname}
            />
            <Input
                type="text"
                labelText="Email*"
                reference={emailRef}
                isdisabled
                value={profileUSerData.email}
            />

            <button
                type="submit"
                disabled={isPending}
                className="btn-form btn btn-default mt-3"
            >
                {isPending ? ("Communication avec le serveur ...") : ("Modifier mon compte")}
            </button>
            {feedback}
        </form>
    );
}

Edit.propTypes = {
    profileUSerData: PropTypes.shape({
        pseudo: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        firstname: PropTypes.string,
        lastname: PropTypes.string,
        imgUrl: PropTypes.string,
        isAdmin: PropTypes.number.isRequired,
    }).isRequired
};
