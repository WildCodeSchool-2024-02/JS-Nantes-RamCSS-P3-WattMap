import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleMenu() {
    setIsCollapsed(() => !isCollapsed);
  }

  return (
    <nav className={isCollapsed ? "collapsed" : ""}>
      <button
        type="button"
        className="nav-menu-button"
        onClick={toggleMenu}
        aria-label={
          isCollapsed ? "Open navigation menu" : "Close navigation menu"
        }
      >
        <div className="nav-menu-button-top-bar" />
        <div className="nav-menu-button-middle-bar" />
        <div className="nav-menu-button-bottom-bar" />
      </button>
      <ul>
        <li>
          <NavLink to="/map">
            <button type="button" onClick={toggleMenu}>
              carte
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => toggleMenu()} to="/signup">
            {" "}
            s'enregistrer{" "}
          </NavLink>
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
