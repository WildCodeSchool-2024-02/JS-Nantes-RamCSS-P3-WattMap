import PropTypes from "prop-types";
import "../styles/switchBtn.css";


// This component takes a state and gives the user the possibility to toggle it

export default function SwitchBtn({state, toggleFunction, labelTrue, labelFalse}) {
    return (
        <fieldset className="switch-wrapper">
            <legend>Filtrer les réservations :</legend>

            <input type="radio" id="switch-input-true" name="button-reservation" className="switch-input" checked={state} onClick={toggleFunction} />
            <label htmlFor="switch-input-true" className="btn switch-label yes-label">{labelTrue}</label>

            <input type="radio" id="switch-input-false" name="button-reservation" className="switch-input" checked={!state} onClick={toggleFunction}/>
            <label htmlFor="switch-input-false" className="btn switch-label no-label">{labelFalse}</label>

            <div className="btn switch-slider" />
        </fieldset>
    )
}

SwitchBtn.propTypes = {
  state: PropTypes.bool.isRequired,
  toggleFunction: PropTypes.func.isRequired,
  labelTrue: PropTypes.string.isRequired,
  labelFalse: PropTypes.string.isRequired
};
