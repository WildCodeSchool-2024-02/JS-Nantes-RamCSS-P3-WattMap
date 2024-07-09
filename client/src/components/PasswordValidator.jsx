import PropTypes from "prop-types";
import { useState, useRef } from "react";

export default function PasswordValidator({
  labelText = "input",
  reference = () => 1,
  placeholder = "",
}) {
  const repeatedPassword = useRef();

  const [feedback, setFeedback] = useState("");
  const [repeatFeedback, setRepeatFeedback] = useState("");

  function checkEquality(confirmPassword) {
    if (reference.current.value === confirmPassword) {
      setRepeatFeedback("✅ le mot de passe correspond");
    } else {
      setRepeatFeedback("❌ le mot de passe ne correspond pas");
    }
  }

  function validate(password) {
    checkEquality(repeatedPassword.current.value);

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
        `❌ Votre mot de passe doit contenir au moins ${errors.join(", ")}`
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
          placeholder={placeholder}
        />
        <p>{feedback}</p>
      </label>

      <label className="input-label" htmlFor={`check-${labelText}`}>
        {`Répétez le ${labelText}`}
        <input
          type="password"
          id={`check-${labelText}`}
          className="input"
          ref={repeatedPassword}
          aria-label={`Répétez le ${labelText}`}
          required
          onChange={(e) => checkEquality(e.target.value)}
          placeholder={placeholder}
        />
        <p>{repeatFeedback}</p>
      </label>
    </>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
PasswordValidator.propTypes = {
  labelText: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  placeholder: PropTypes.string,
};
