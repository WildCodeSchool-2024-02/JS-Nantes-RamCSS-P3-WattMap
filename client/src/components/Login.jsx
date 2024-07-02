import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import "../styles/form.css";

export default function Login() {
  // refs are used in order to not trigger a re-render everytime the content of inputs change
  const emailRef = useRef();
  const passwordRef = useRef();

  // used to give feedback to the user when logging in
  const [isLogged, setIsLogged] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  // used to automatically navigate to a page
  const navigate = useNavigate();

  const handleFetch = async (data) => {
    setIsPending(true);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // this is the part that handles cookies
      body: JSON.stringify(data),
    });

    setTimeout(() => {
      setIsPending(false);
      setFormWasSubmitted(true);
    }, 500); // this timeout is used to show the spinner

    if (response.ok) {
      const res = await response.json();
      console.info("Logged", res);
      setIsLogged(true);
      setTimeout(() => navigate("/map"), 1500);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const email = emailRef.current.value;
      // const isEmailValid = emailValidation(email);

      const password = passwordRef.current.value;
      // const isPasswordValid = passwordValidation(password);

      // if (isEmailValid && isPasswordValid) {
      await handleFetch({ email, password });
      // }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input type="text" labelText="Email" reference={emailRef} />
      <Input type="password" labelText="Mot de passe" reference={passwordRef} />
      <button
        type="submit"
        disabled={isPending}
        className="btn btn-default mt-3"
      >
        {isPending ? (
          <p>Communication avec le serveur ...</p>
        ) : (
          <p>Se connecter</p>
        )}
      </button>
      {formWasSubmitted && isLogged && (
        <p className="feedback-good">✅ Connexion réussie, redirection</p>
      )}
      {formWasSubmitted && !isLogged && (
        <p className="feedback-bad">❌ Identifiant ou mot de passe invalide</p>
      )}
    </form>
  );
}
