// import { useLoaderData } from "react-router-dom";
import ProfileImage from "../components/ProfileImage";
import Edit from "../components/Edit";
import "../styles/form.css";

export default function EditProfile() {
  // const profileUSer = useLoaderData();
  // console.log('%c⧭', 'color: #00e600', profileUSer);

  return (
    <main className="container">
      <h1>je suis dans éditer mon profil</h1>
      {/* {profileUSer.map((profile) => (
     ))} */}
      <ProfileImage displayMode={1} />
      <Edit />
    </main>
  );

}