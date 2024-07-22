import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/profileImage.css";

export default function VehicleImage({ isEditable = false, imgUrl }) {
  return (
    <figure className={`profile-image ${isEditable ? "edit-car-image" : ""}`}>
      {imgUrl ? (
        <img
          src={`${import.meta.env.VITE_API_URL}${imgUrl}`}
          alt="Votre véhicule"
          className="vehicle-image"
        />
      ) : (
        <>
          <Icons choiceIcon="car" />
          <figcaption className="visually-hidden">
            Image par défaut
          </figcaption>
        </>
      )}
    </figure>
  );
}

// Déclaration des propTypes
VehicleImage.propTypes = {
  imgUrl: PropTypes.string,
  isEditable: PropTypes.bool
};

// Déclaration des defaultProps
VehicleImage.defaultProps = {
  isEditable: false,
  imgUrl: ""
};
