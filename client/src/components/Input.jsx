import "../styles/input.css";
import PropTypes from 'prop-types';

// type: Spécifie le type de l'input (par exemple, text, password, email).
// labelText: Le texte qui apparaîtra dans le label associé à l'input.

export default function Input({ type, labelText, reference }) {
  return (
    <form action="" method="get" className="input-form">
      <label className="input-label" htmlFor={labelText}>
      {labelText}
        <input
          type={type}
          id={labelText}
          className="input"
          ref={reference}
          aria-label={labelText}
          required
        />
      </label>
    </form>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired
};
