import { useLoaderData } from "react-router-dom";
import "../styles/form.css";
import Edit from "../components/Edit";
import EditableProfileImage from "../components/EditableProfileImage";

export default function EditProfile() {
  const user = useLoaderData();

  return (
    <main className="container">
      <h1>éditer mon profil</h1>
      <EditableProfileImage imgUrl={user.imgUrl} />
      <Edit profileUSerData={user} />
    </main>
  );

}
