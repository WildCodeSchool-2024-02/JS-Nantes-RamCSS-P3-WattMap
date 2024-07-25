import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/cardVehicle.css";
import ProfileImage from "./ProfileImage";
import DeleteVehicleButton from "./DeleteVehicleButton";

export default function CardVehicle({ vehicle = {}}) {
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
        <DeleteVehicleButton vehicleId={vehicle.id}/>
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

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
CardVehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    chargingType: PropTypes.string,
  }),
};
