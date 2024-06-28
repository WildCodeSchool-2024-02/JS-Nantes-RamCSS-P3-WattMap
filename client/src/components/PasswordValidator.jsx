import "../styles/input.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function PasswordValidator({ labelText, reference }) {
  const [feedback, setFeedback] = useState("");

  function validate(password) {

    // constraints
    const minLength = 12;
    const containsLowerCase = /[a-z]/g.test(password);
    const containsUpperCase = /[A-Z]/g.test(password);
    const containsDigit = /[0-9]/g.test(password);
    const containsSpecial = /[^a-zA-Z0-9]/g.test(password);

    if (
      password.length > minLength &&
      containsUpperCase &&
      containsLowerCase &&
      containsDigit &&
      containsSpecial
    ) {
      setFeedback("✅ Votre mot de passe est valide");
    } else {

      // give feedback to the user based on his current password
      const errors = [];
      if (password.length < minLength) errors.push("12 caractères");
      if (!containsUpperCase) errors.push("1 majuscule");
      if (!containsLowerCase) errors.push("1 minuscule");
      if (!containsDigit) errors.push("1 chiffre");
      if (!containsSpecial) errors.push("1 caractère spécial");

      setFeedback(
        `❌ Votre mot de passe doit contenir au moins ${errors.join(', ')}`
      );
    }
  }

  return (
    <>
      <label className="input-label" htmlFor={labelText}>
        {labelText}
        <input
          type="password"
          id={labelText}
          className="input"
          ref={reference}
          aria-label={labelText}
          required
          onChange={(e) => validate(e.target.value)}
        />
      </label>
      <p>{feedback}</p>
    </>
  );
}

PasswordValidator.propTypes = {
  labelText: PropTypes.string.isRequired,
  reference: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

PasswordValidator.defaultProps = {
  reference: () => 1,
};
