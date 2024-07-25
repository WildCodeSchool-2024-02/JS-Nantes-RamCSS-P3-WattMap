import PropTypes from "prop-types";
import { useState } from "react";
import SwitchBtn from "../components/SwitchBtn";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../styles/form.css";
import Footer from "../components/Footer";

export default function LoginSignUp({ loginIsDisplayedByDefault }) {
  const [isLoginPage, setIsLoginPage] = useState(loginIsDisplayedByDefault);

  function toggle() {
    setIsLoginPage(!isLoginPage);
  }

  return (<>
    <main className="container">
      <h1 className="main-title">Identification</h1>

      <section className="form-container container-outline">
        <SwitchBtn
          labelTrue="CONNEXION"
          labelFalse="INSCRIPTION"
          state={isLoginPage}
          toggleFunction={() => toggle()}
        />
        {isLoginPage ? <Login /> : <Signup />}
      </section>
    </main>
    <Footer />
    </>
  );
}

LoginSignUp.propTypes = {
  loginIsDisplayedByDefault: PropTypes.bool.isRequired,
};
