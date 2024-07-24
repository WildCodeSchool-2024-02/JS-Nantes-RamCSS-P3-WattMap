import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlugInfos from "../components/PlugInfos";
import '../styles/editVehicule.css';
import ProfileImage from '../components/ProfileImage';

const chargingTypes = [
  { id: 'type1', label: 'Type 1' },
  { id: 'type2', label: 'Type 2' },
  { id: 'ccs', label: 'CCS' },
];

export default function EditVehicle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [errorVehicle, setErrorVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`/api/vehicles/${id}`);
        if (!response.ok) throw new Error('Vehicle not found');
        const data = await response.json();
        setVehicle(data);
      } catch (error) {
        setErrorVehicle('Erreur lors de la récupération du véhicule.');
      }
    };

    fetchVehicle();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChargingTypeClick = (type) => {
    setVehicle((prevState) => ({
      ...prevState,
      chargingType: type.label,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setVehicle((prevState) => ({
        ...prevState,
        image: imageUrl,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/vehicles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicle),
      });
      if (!response.ok) throw new Error('Failed to update vehicle');
      navigate('/profile');
    } catch (error) {
      setErrorVehicle('Erreur lors de la mise à jour du véhicule.');
    }
  };

  if (errorVehicle) {
    return (
      <div className="edit-vehicle-card">
        <h1 className="edit-vehicle-title">Erreur</h1>
        <p>{errorVehicle}</p>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="edit-vehicle-card">
        <h1 className="edit-vehicle-title">Chargement...</h1>
        <p>Veuillez patienter pendant que nous chargeons les informations du véhicule.</p>
      </div>
    );
  }

  return (
    <div className="edit-vehicle-container">
      <div className="edit-vehicle-card">
        <h1 className="edit-vehicle-title">Modifier le véhicule</h1>
        <form onSubmit={handleSubmit} className="edit-vehicle-form">
          <div className="form-group">
            <label htmlFor="image" className="form-label">Choisir une image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
              aria-labelledby="image-label"
            />
            <label htmlFor="image" className="btn btn-secondary" id="image-label">
              {vehicle.image ? (
                <img src={vehicle.image} alt="Aperçu" className="image-preview-img" />
              ) : (
                <ProfileImage isEditable icon="car" />

              )}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="brand" className="form-label">Marque</label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="form-control"
              value={vehicle.brand}
              onChange={handleInputChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="model" className="form-label">Modèle</label>
            <input
              type="text"
              id="model"
              name="model"
              className="form-control"
              value={vehicle.model}
              onChange={handleInputChange}
              required
              aria-required="true"
            />
          </div>
          <p className="discrete-description">Nos types de prises de recharge disponibles</p>
          <ul className="d-flex flex-row flex-wrap justify-content-center list-unstyled gap-3">
            {chargingTypes.map((type) => (
              <li key={type.id} className={vehicle.chargingType === type.label ? 'selected' : ''}>
                <button
                  type="button"
                  onClick={() => handleChargingTypeClick(type)}
                  className="btn"
                  aria-label={`Sélectionner le type de charge ${type.label}`}
                >
                  <PlugInfos plug={type} compact />
                </button>
              </li>
            ))}
          </ul>
          <button type="submit" className="btn btn-primary">Enregistrer les modifications</button>
        </form>
      </div>
    </div>
  );
}
