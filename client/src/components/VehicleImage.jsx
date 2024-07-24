import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/vehicleImage.css";

export default function VehicleImage({ isEditable = false, imgUrl }) {
  return (
    <figure className={`vehicle-image-container ${isEditable ? "edit-car-image" : ""}`}>
      {imgUrl ? (
        <img
          src={`${import.meta.env.VITE_API_URL}${imgUrl}`}
          alt="Votre véhicule"
          className="vehicle-image"
        />
      ) : (
        <Icons choiceIcon="car" className="default-icon" />
      )}
    </figure>
  );
}

VehicleImage.propTypes = {
  imgUrl: PropTypes.string,
  isEditable: PropTypes.bool
};

VehicleImage.defaultProps = {
  isEditable: false,
  imgUrl: ""
};
