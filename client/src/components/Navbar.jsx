import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/map"> carte </NavLink>
        </li>
        <li>
          <NavLink to="/signup"> s'enregistrer </NavLink>
        </li>
        <li>
          <NavLink to="/login"> se connecter </NavLink>
        </li>
        <li>
          <NavLink to="/profile"> mon profil </NavLink>
        </li>
        <li>
          <NavLink to="/profile/edit"> éditer mon profil</NavLink>
        </li>
        <li>
          <NavLink to="/profile/addvehicle"> ajouter un véhicule </NavLink>
        </li>
        <li>
          <NavLink to="/profile/editVehicule"> éditer mon véhicule </NavLink>
        </li>
        <li>
          <NavLink to="/news"> je suis dans actus </NavLink>
        </li>
        <li>
          <NavLink to="/news/22">Actualités </NavLink>
        </li>
        <li>
          <NavLink to="/station/27"> station </NavLink>
        </li>
        <li>
          <NavLink to="/components"> Les composants </NavLink>
        </li>
        <li>
          <NavLink to="/infos"> Infos à propos des prises </NavLink>
        </li>
      </ul>
    </nav>
  );
}
