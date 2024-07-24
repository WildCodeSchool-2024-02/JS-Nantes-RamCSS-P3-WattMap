import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/cardVehicle.css";
import ProfileImage from "./ProfileImage";

export default function CardVehicle({ vehicle, onDeleteVehicle }) {
  return (
    <article className="card">
      <section className="d-flex w-100 align-items-center">
        <ProfileImage icon="car" />
        <div className="infos-card">
          <div className="vehicle-card-details">
            <div className="vehicle-card-brand-model">
              {vehicle.brand} <br /> {vehicle.model}
            </div>
            <div className="vehicle-card-charging-type">
              Type de charge: {vehicle.chargingType}
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex w-100 justify-content-between mt-4">
        <button
          type="button"
          onClick={() => onDeleteVehicle(vehicle.id)}
          className="btn btn-cancel"
        >
          Supprimer
        </button>
        <Link
          to={`/profile/editvehicule/${vehicle.id}`}
          className="btn btn-contour"
        >
          Modifier
        </Link>
      </div>
    </article>
  );
}

CardVehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    chargingType: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteVehicle: PropTypes.func.isRequired,
};
