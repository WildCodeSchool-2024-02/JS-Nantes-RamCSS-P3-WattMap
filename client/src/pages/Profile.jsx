import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../styles/profile.css";
import ProfileImage from "../components/ProfileImage";
import CardVehicle from "../components/CardVehicle";

export default function Profile() {
  // Load user data using the loader from react-router
  const user = useLoaderData();
  const [userVehicles, setUserVehicles] = useState([]);

  // Fetch user vehicles from the API when the component mounts
  useEffect(() => {
    const fetchUserVehicles = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/vehicles`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies for authentication
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
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="profile-container">
      <h1 className="text-center w-100">Mon profil</h1>
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <ProfileImage icon="user" imgUrl={user.imgUrl} />
        </div>
        <div className="profile-details">
          <p className="profile-detail">{user.pseudo}</p>
          <p className="profile-detail">{`${user.firstname} ${user.lastname}`}</p>
          <p className="profile-detail">{user.email}</p>
        </div>
      </div>
      <div className="profile-actions">
        <button type="button" className="btn btn-profile-delete">
          Supprimer
        </button>
        <Link to="/profile/edit" className="btn btn-profile-edit">
          Modifier
        </Link>
      </div>

      <section className="vehicle-card-container">
        <h2 className="vehicle-card-title">Mes véhicules</h2>
        <div className="vehicle-card-list">
          {userVehicles.length > 0 ? (
            userVehicles.map((vehicle) => (
              <CardVehicle key={vehicle.id} vehicle={vehicle} />
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
    </div>
  );
}
