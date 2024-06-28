import "../styles/input.css";
import PropTypes from "prop-types";

// type: Spécifie le type de l'input (par exemple, text, password, email).
// labelText: Le texte qui apparaîtra dans le label associé à l'input.

export default function Input({ type, labelText, reference }) {
  return (
    <label className="form-input-label" htmlFor={labelText}>
      {labelText}
      <input
        type={type}
        id={labelText}
        className="form-input"
        ref={reference}
        aria-label={labelText}
        required
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  reference: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Input.defaultProps = {
  reference: () => 1,
};
