import { useLoaderData } from "react-router-dom";
import "../styles/form.css";
import ProfileImage from "../components/ProfileImage";
import Edit from "../components/Edit";

export default function EditProfile() {
  const user = useLoaderData();

  // console.log(user);

  return (
    <main className="container">
      <h1>éditer mon profil</h1>
      <ProfileImage displayMode={1} />
      <Edit profileUSerData={user} />
    </main>
  );

}
