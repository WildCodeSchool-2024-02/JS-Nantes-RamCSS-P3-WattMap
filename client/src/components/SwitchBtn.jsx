import "../styles/switchBtn.css";

export default function SwitchBtn() {
  return (
    <fieldset className="switch-wrapper">
      <legend>Filtrer les réservations :</legend>

      <input
        type="radio"
        id="resa_en_cours"
        name="button-reservation"
        className="switch-input"
        checked
      />
      <label htmlFor="resa_en_cours" className="btn switch-label yes-label">
        En cours
      </label>

      <input
        type="radio"
        id="resa_passees"
        name="button-reservation"
        className="switch-input"
      />
      <label htmlFor="resa_passees" className="btn switch-label no-label">
        Passées
      </label>

      <div className="btn switch-slider" />
    </fieldset>
  );
}
