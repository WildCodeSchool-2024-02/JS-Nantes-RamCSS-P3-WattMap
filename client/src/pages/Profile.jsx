import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profile.css';
import ProfileImage from "../components/ProfileImage";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    location: 'Paris, France'
  });

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/edit-profile', { state: { user } });
  };

  const handleDeleteProfile = () => {
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer le profil ?");
    if (isConfirmed) {
      setUser(null);
    }
  };

  if (!user) {
    return <p>Profil supprimé.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-avatar">
          <ProfileImage />
        </div>
        <div className="profile-details">
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.location}</p>
        </div>
      </div>
      <div className="profile-actions">
        <button type='button' onClick={handleDeleteProfile} className="btn btn-cancel">Supprimer</button>
        <button type='button' onClick={handleEditProfile} className="btn btn-default">Modifier</button>
      </div>
    </div>
  );
}
