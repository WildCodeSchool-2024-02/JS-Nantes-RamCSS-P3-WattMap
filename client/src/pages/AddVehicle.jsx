import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VehicleImage from "../components/VehicleImage";
import PlugInfos from "../components/PlugInfos";
import "../styles/addVehicle.css";
import "../styles/Infos.css";

const chargingTypes = [
  { id: "type1", label: "Type 1" },
  { id: "type2", label: "Type 2" },
  { id: "ccs", label: "CCS" },
];

export default function AddVehicle() {
  const navigate = useNavigate();
  const [newVehicle, setNewVehicle] = useState({
    image: "",
    brand: "",
    model: "",
    chargingType: "Type 1",
  });

  // Handle input change for text fields (brand and model)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input change for vehicle image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewVehicle((prevState) => ({
        ...prevState,
        image: imageUrl,
      }));
    }
  };

  // Handle form submission to add a new vehicle
  const handleAddVehicle = (e) => {
    e.preventDefault();
    setNewVehicle({
      image: "",
      brand: "",
      model: "",
      chargingType: "Type 1",
    });
    navigate("/profile");
  };

  // Handle click on charging type button to set the selected charging type
  const handleChargingTypeClick = (type) => {
    setNewVehicle((prevState) => ({
      ...prevState,
      chargingType: type.label,
    }));
  };

  // console.log(newVehicle);

  return (
    <div className="add-vehicle-container">
      <h1 className="add-vehicle-title">Ajouter un nouveau véhicule</h1>
      <form onSubmit={handleAddVehicle} className="add-vehicle-form">
        <div className="form-group">
          <label htmlFor="image" className="discrete-description">
            Choisir une image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            style={{ display: "none" }}
            onChange={handleFileChange}
            aria-labelledby="image-label"
          />
          <label htmlFor="image" className="btn btn-secondary" id="image-label">
            {newVehicle.image ? (
              <img
                src={newVehicle.image}
                alt="Aperçu"
                className="image-preview-img"
              />
            ) : (
              <VehicleImage imgUrl={newVehicle.image} isEditable />
            )}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="brand" className="form-label">
            Marque
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="form-control"
            value={newVehicle.brand}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="model" className="form-label">
            Modèle
          </label>
          <input
            type="text"
            id="model"
            name="model"
            className="form-control"
            value={newVehicle.model}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
        </div>
        <p className="discrete-description">
          Nos types de prises de recharge disponibles
        </p>
        <ul className="d-flex flex-row flex-wrap justify-content-center list-unstyled gap-3">
          {chargingTypes.map((type) => (
            <li
              key={type.id}
              className={
                newVehicle.chargingType === type.label ? "selected" : ""
              }
            >
              <button
                type="button"
                onClick={() => handleChargingTypeClick(type)}
                className="btn"
                aria-label={`Sélectionner le type de charge ${type.label}`}
              >
                <PlugInfos plug={type} />
              </button>
            </li>
          ))}
        </ul>
        <button type="submit" className="btn btn-primary">
          Ajouter le véhicule
        </button>
      </form>
    </div>
  );
}
