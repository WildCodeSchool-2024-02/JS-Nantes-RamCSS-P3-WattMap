import PropTypes from "prop-types";
import VehicleImage from "./VehicleImage";
import "../styles/cardVehicle.css";

export default function CardVehicle({
  vehicles,
  onEditVehicle,
  onDeleteVehicle,
  onAddVehicle,
}) {
  return (
    <div className="profile-vehicles">
      <h2 className="titre-vehicle">Automobile</h2>
      <div className="vehicle-list">
        {vehicles && vehicles.length > 0 ? (
          vehicles.map((vehicle, index) => (
            <div className="card-vehicle" key={vehicle.id}>
              <div className="vehicle-image">
                <VehicleImage
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                />
              </div>
              <div className="vehicle-info">
                <div className="vehicle-details">
                  <div className="vehicle-brand-model">
                    {vehicle.brand} <br /> {vehicle.model}
                  </div>
                  <div className="vehicle-charging-type">
                    Type de charge: {vehicle.chargingType}
                  </div>
                </div>
                <div className="vehicle-actions">
                  <button
                    type="button"
                    onClick={() => onDeleteVehicle(index)}
                    className="btn btn-delete"
                  >
                    Supprimer
                  </button>
                  <button
                    type="button"
                    onClick={() => onEditVehicle(vehicle)}
                    className="btn btn-edit"
                  >
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun véhicule enregistré.</p>
        )}
      </div>
      <div className="add-vehicle-button">
        <button type="button" onClick={onAddVehicle} className="btn btn-add">
          Ajouter un véhicule
        </button>
      </div>
    </div>
  );
}

CardVehicle.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      chargingType: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEditVehicle: PropTypes.func.isRequired,
  onDeleteVehicle: PropTypes.func.isRequired,
  onAddVehicle: PropTypes.func.isRequired,
};
