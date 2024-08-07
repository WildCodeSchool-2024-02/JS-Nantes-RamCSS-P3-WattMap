import PropTypes from "prop-types";

// type: Spécifie le type de l'input (par exemple, text, password, email).
// labelText: Le texte qui apparaîtra dans le label associé à l'input.

export default function Input({
  type = "text",
  labelText = "input",
  reference = () => 1,
  isDisabled = false,
  isRequired = false,
  value = "",
}) {
  return (
    <label className="input-label" htmlFor={labelText}>
      {labelText}
      <input
        type={type}
        id={labelText}
        className="input"
        ref={reference}
        aria-label={labelText}
        disabled={isDisabled}
        required={isRequired}
        defaultValue={value}
      />
    </label>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
Input.propTypes = {
  type: PropTypes.string,
  labelText: PropTypes.string,
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
};
