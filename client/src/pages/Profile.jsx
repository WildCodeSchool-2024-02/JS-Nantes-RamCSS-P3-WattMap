import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/profile.css";
import ProfileImage from "../components/ProfileImage";
import CardVehicle from "../components/CardVehicle";
import VehicleImage from "../components/VehicleImage";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    location: "Paris, France",
    vehicles: [
      {
        image: VehicleImage,
        brand: "Tesla",
        model: "Model S",
        chargingType: "Type 2",
      },
      {
        image: VehicleImage,
        brand: "Nissan",
        model: "Leaf",
        chargingType: "Type 1",
      },
    ],
  });

  const [dialog, setDialog] = useState({
    isOpen: false,
    message: '',
    onConfirm: null,
  });

  const openDialog = (message, onConfirm) => {
    setDialog({
      isOpen: true,
      message,
      onConfirm: () => {
        onConfirm();
        setDialog({ ...dialog, isOpen: false });
      },
    });
  };

  const handleDeleteProfile = () => {
    openDialog("Êtes-vous sûr de vouloir supprimer le profil ?", () => setUser(null));
  };

  const handleDeleteVehicle = (index) => {
    openDialog("Êtes-vous sûr de vouloir supprimer ce véhicule ?", () => {
      setUser((prevState) => ({
        ...prevState,
        vehicles: prevState.vehicles.filter((_, i) => i !== index),
      }));
    });
  };

  if (!user) {
    return <p>Profil supprimé.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <ProfileImage />
        </div>
        <div className="profile-details">
          <p className="profile-detail">{user.firstName}</p>
          <p className="profile-detail">{user.lastName}</p>
          <p className="profile-detail">{user.email}</p>
          <p className="profile-detail">{user.location}</p>
        </div>
      </div>
      <div className="profile-actions">
        <button
          type="button"
          onClick={handleDeleteProfile}
          className="btn btn-profile-delete"
        >
          Supprimer
        </button>
        <Link to="/profile/edit" className="btn btn-profile-edit">
          Modifier
        </Link>
      </div>
      <CardVehicle
        vehicles={user.vehicles}
        onDeleteVehicle={handleDeleteVehicle}
      />
      {/* Confirmation Modal */}
      {dialog.isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p className="modal-message">{dialog.message}</p>
            <div className="modal-actions">
              <button type="button" onClick={dialog.onConfirm} className="btn btn-modal-confirm">Oui</button>
              <button type="button" onClick={() => setDialog({ ...dialog, isOpen: false })} className="btn btn-modal-cancel">Non</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
