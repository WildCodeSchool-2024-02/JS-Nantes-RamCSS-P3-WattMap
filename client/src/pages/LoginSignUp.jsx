import PropTypes from "prop-types";
import { useState } from "react";
import SwitchBtn from "../components/SwitchBtn";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../styles/form.css";

export default function LoginSignUp({ loginIsDisplayedByDefault }) {
  const [isLoginPage, setIsLoginPage] = useState(loginIsDisplayedByDefault);

  function toggle() {
    setIsLoginPage(!isLoginPage);
  }

  return (
    <main className="form-container">
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

LoginSignUp.propTypes = {
  loginIsDisplayedByDefault: PropTypes.bool.isRequired,
};
