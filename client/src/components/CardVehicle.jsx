import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VehicleImage from "./VehicleImage";
import "../styles/cardVehicle.css";

export default function CardVehicle({
  vehicles,
  onEditVehicle,
  onDeleteVehicle,
}) {
  const handleImageChange = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onEditVehicle(id, imageUrl);
    }
  };

  return (
    <div className="vehicle-card-container">
      <h2 className="vehicle-card-title">Automobile</h2>
      <div className="vehicle-card-list">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <div className="vehicle-card-item" key={vehicle.id}>
              <div className="vehicle-card-image-container">
                <VehicleImage
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  isEditable
                  onImageChange={(e) => handleImageChange(vehicle.id, e)}
                  className="vehicle-card-image"
                />
              </div>
              <div className="vehicle-card-info">
                <div className="vehicle-card-details">
                  <div className="vehicle-card-brand-model">
                    {vehicle.brand} <br /> {vehicle.model}
                  </div>
                  <div className="vehicle-card-charging-type">
                    Type de charge: {vehicle.chargingType}
                  </div>
                </div>
                <div className="vehicle-card-actions">
                  <button
                    type="button"
                    onClick={() => onDeleteVehicle(vehicle.id)}
                    className="btn btn-card-delete"
                  >
                    Supprimer
                  </button>
                  <Link
                    to={`/profile/editvehicule/${vehicle.id}`}
                    className="btn btn-card-edit"
                  >
                    Modifier
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun véhicule enregistré.</p>
        )}
      </div>
      <div className="mt-4 text-center">
        <Link to="/profile/addvehicle" className="btn btn-black">
          Ajouter un véhicule
        </Link>
      </div>
    </div>
  );
}

CardVehicle.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string,
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      chargingType: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEditVehicle: PropTypes.func.isRequired,
  onDeleteVehicle: PropTypes.func.isRequired,
};
