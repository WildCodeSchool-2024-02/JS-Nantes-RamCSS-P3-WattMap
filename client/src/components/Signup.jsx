import { useRef, useState } from "react";
import Input from "./Input";

export default function Signup() {
  // refs are used in order to not trigger a re-render everytime the content of inputs change
  const pseudoRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordDuplicateRef = useRef();

  // used to give feedback to the user when logging in
  const [isPending, setIsPending] = useState(false);
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);


  // TODO : write a correct function
  function handleSubmit(){
    if (formWasSubmitted) setIsPending(true)
    setFormWasSubmitted(false)
  }

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <Input type="text" labelText="Pseudo*" reference={pseudoRef} />
      <Input type="text" labelText="Prenom" reference={firstNameRef} />
      <Input type="text" labelText="Nom" reference={lastNameRef} />
      <Input type="text" labelText="Email*" reference={emailRef} />
      <Input type="password" labelText="Mot de passe*" reference={passwordRef} />
      <Input type="password" labelText="Répétez le mot de passe*" reference={passwordDuplicateRef} />
      <button type="submit" disabled={isPending}>
        {isPending ? (
          <p>Communication avec le serveur ...</p>
        ) : (
          <p>Créer mon compte</p>
        )}
      </button>
    </form>
  );
}
