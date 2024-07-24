import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/profile.css";
import ProfileImage from "../components/ProfileImage";
import CardVehicle from "../components/CardVehicle";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    location: "Paris, France",
    vehicles: [
      {
        brand: "Tesla",
        model: "Model S",
        chargingType: "Type 2",
      },
      {
        brand: "Nissan",
        model: "Leaf",
        chargingType: "Type 1",
      },
    ],
  });

  const [dialog, setDialog] = useState({
    isOpen: false,
    message: "",
    onConfirm: null,
  });

  // Function to open confirmation dialog with a message and onConfirm callback
  const openDialog = (message, onConfirm) => {
    setDialog({
      isOpen: true,
      message,
      onConfirm: () => {
        onConfirm();
        setDialog({ ...dialog, isOpen: false }); // Close dialog after confirmation
      },
    });
  };

  // Function to handle profile deletion with confirmation
  const handleDeleteProfile = () => {
    openDialog("Êtes-vous sûr de vouloir supprimer le profil ?", () =>
      setUser(null)
    );
  };

  // Function to handle vehicle deletion with confirmation
  const handleDeleteVehicle = (index) => {
    openDialog("Êtes-vous sûr de vouloir supprimer ce véhicule ?", () => {
      setUser((prevState) => ({
        ...prevState,
        vehicles: prevState.vehicles.filter((_, i) => i !== index),
      }));
    });
  };

  // Render message if user profile is deleted
  if (!user) {
    return <p>Profil supprimé.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <ProfileImage icon="user" />
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


      <section className="vehicle-card-container">
        <h2 className="vehicle-card-title">Automobile</h2>
        <div className="vehicle-card-list">
          {user.vehicles.length > 0 ? (
            user.vehicles.map((vehicle) => (
              <CardVehicle key={vehicle.id} vehicles={user.vehicles} onDeleteVehicle={handleDeleteVehicle}
            />
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
      </section>
      {/* Confirmation Modal */}
      {dialog.isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p className="modal-message">{dialog.message}</p>
            <div className="modal-actions">
              <button
                type="button"
                onClick={dialog.onConfirm}
                className="btn btn-modal-confirm"
              >
                Oui
              </button>
              <button
                type="button"
                onClick={() => setDialog({ ...dialog, isOpen: false })}
                className="btn btn-modal-cancel"
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
