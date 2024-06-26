import { useRef } from "react";
import Input from "../components/Input";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFetch = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // this is the part that handles cookies
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const res = await response.json();
      // localStorage.setItem("token", res.token);
      console.info("Logged", res);
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
    <main className="container">
      <h1>se connecter</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" labelText="Email" reference={emailRef} />
        <Input
          type="password"
          labelText="Mot de passe"
          reference={passwordRef}
        />
        <button type="submit">login</button>
      </form>
    </main>
  );
}
