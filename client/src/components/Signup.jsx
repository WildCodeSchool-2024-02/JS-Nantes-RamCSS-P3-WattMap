import { useRef, useState } from "react";
import Input from "./Input";
import "../styles/login.css";
import PasswordValidator from "./PasswordValidator";

export default function Signup() {
  // refs are used in order to not trigger a re-render everytime the content of inputs change
  const pseudoRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // used to give feedback to the user when logging in
  const [isPending, setIsPending] = useState(false);
  const [feedback,setFeedback] = useState('')

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
      setFeedback('✅ Compte créé avec succès !')
    } else {
      setFeedback('❌ Erreur dans la création de votre compte, vérifiez vos informations')
    }
  };

  function validate(pseudo,email,password){
    const passwordIsValid= /[a-z]/g.test(password) && /[A-Z]/g.test(password) && /[0-9]/g.test(password) && /[^a-zA-Z0-9]/g.test(password)
    const emailIsValid=/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/.test(email)

    if (!pseudo){
      setFeedback('❌ votre pseudo ne peut pas être vide')
      return false;
    }

    if (!emailIsValid){
      setFeedback('❌ votre email semble invalide')
      return false;
    } 

    if (!passwordIsValid){
      setFeedback('❌ votre mot de passe semble invalide')
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
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const formDataisValid = validate(pseudo,email,password)

      if (formDataisValid) {
      await handleFetch({ pseudo, firstName, lastName, email, password });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <Input type="text" labelText="Pseudo*" reference={pseudoRef} />
      <Input type="text" labelText="Prénom" reference={firstNameRef} />
      <Input type="text" labelText="Nom" reference={lastNameRef} />
      <Input type="text" labelText="Email*" reference={emailRef} />
      <PasswordValidator labelText="Mot de passe*" reference={passwordRef}/>
      <button type="submit" disabled={isPending }>
        {isPending ? (
          <p>Communication avec le serveur ...</p>
        ) : (
          <p>Créer mon compte</p>
        )}
      </button>
      {feedback}
    </form>
  );
}
