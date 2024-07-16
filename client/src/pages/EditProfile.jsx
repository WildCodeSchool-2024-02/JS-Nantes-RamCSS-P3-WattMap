import { useLoaderData } from "react-router-dom";
import "../styles/form.css";
import ProfileImage from "../components/ProfileImage";
import Edit from "../components/Edit";

export default function EditProfile() {
  const profileUSer = useLoaderData();

  return (
    <main className="container">
      <h1>je suis dans éditer mon profil</h1>
      {/* {profileUSer.map((profile) => (
     ))} */}
      <ProfileImage displayMode={1} />
      <Edit profileUSerData={profileUSer} />
    </main>
  );

}
