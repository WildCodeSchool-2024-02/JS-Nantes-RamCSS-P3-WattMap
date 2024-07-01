import { useState } from "react";
import SwitchBtn from "../components/SwitchBtn";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../styles/loginsignup.css";

export default function LoginSignUp() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  function toggle() {
    setIsLoginPage(!isLoginPage);
  }

  return (
    <main className="container loginsignup-container">
      <SwitchBtn
        labelTrue="CONNEXION"
        labelFalse="INSCRIPTION"
        state={isLoginPage}
        toggleFunction={() => toggle()}
      />
      {isLoginPage ? <Login /> : <Signup />}
    </main>
  );
}
