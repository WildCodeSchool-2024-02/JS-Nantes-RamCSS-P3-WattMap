import { useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function Login() {

  // refs are used in order to not trigger a re-render everytime the content of inputs change
  const emailRef = useRef();
  const passwordRef = useRef();

  // used to give feedback to the user when logging in
  const [isLogged,setIsLogged] = useState(false);
  const [isPending,setIsPending] = useState(false);

  // used to automatically navigate to a page
  const navigate = useNavigate();


  const handleFetch = async (data) => {
    setIsPending(true)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // this is the part that handles cookies
      body: JSON.stringify(data),
    });

    setIsPending(false);

    if (response.ok) {
      const res = await response.json();
      console.info("Logged", res);
      setIsLogged(true);
      setTimeout(()=>navigate("/map"),1500);
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
      <h1>Connexion</h1>
      {!isPending?(<form onSubmit={handleSubmit}>
        <Input type="text" labelText="Email" reference={emailRef} />
        <Input
          type="password"
          labelText="Mot de passe"
          reference={passwordRef}
        />
        {isLogged&&(<p>Connexion réussie</p>)}
        <button type="submit" disabled = {isPending}>login</button>
      </form>):(<h2>pending</h2>)}
      
    </main>
  );
}
