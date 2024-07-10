import "../styles/form.css";
import ProfileImage from "../components/ProfileImage";
import Signup from "../components/Signup";

export default function EditProfile() {

  return (
    <main className="container">
      <h1>je suis dans éditer mon profil</h1>
      <ProfileImage />
      <Signup />
    </main>
  );
}
