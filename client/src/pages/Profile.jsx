import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/profile.css";
import ProfileImage from "../components/ProfileImage";
import CardVehicle from "../components/CardVehicle";

export default function Profile() {
  const user = useLoaderData();
  const [userVehicles, setUserVehicles] = useState([]);
  // const [userDelete, setUserDelete] = useState([]);

  useEffect(() => {
    const fetchUserVehicles = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/vehicle`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUserVehicles(data);
        } else {
          console.error("Failed to fetch vehicles");
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchUserVehicles();
  }, []);

  // useEffect(() => {
  //   const deleteUserVehicles = async () => {
  //     try {
  //       const response = await fetch(
  //         `${import.meta.env.VITE_API_URL}/api/users`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           credentials: "include",
  //         }
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         setUserDelete(data);
  //       } else {
  //         console.error("Failed to delete user");
  //       }
  //     } catch (error) {
  //       console.error("user delete error:", error);
  //     }
  //   };

  //   deleteUserVehicles();
  // }, []);

  const [dialog, setDialog] = useState({
    isOpen: false,
    message: "",
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
    openDialog("Êtes-vous sûr de vouloir supprimer le profil ?", () =>
      setUserVehicles(null)
    );
  };

  const handleDeleteVehicle = (id) => {
    openDialog("Êtes-vous sûr de vouloir supprimer ce véhicule ?", () => {
      setUserVehicles((prevVehicles) =>
        prevVehicles.filter((vehicle) => vehicle.id !== id)
      );
    });
  };

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
          <p className="profile-detail">{user.firstname}</p>
          <p className="profile-detail">{user.lastname}</p>
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
          {userVehicles.length > 0 ? (
            userVehicles.map((vehicle) => (
              <CardVehicle
                key={vehicle.id}
                vehicle={vehicle}
                onDeleteVehicle={handleDeleteVehicle}
              />
            ))
          ) : (
            <p>Aucun véhicule trouvé.</p>
          )}
        </div>
        <div className="mt-4 text-center">
          <Link to="/profile/addvehicle" className="btn btn-black">
            Ajouter un véhicule
          </Link>
        </div>
      </section>

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
