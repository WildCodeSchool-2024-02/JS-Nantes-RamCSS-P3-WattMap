import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleMenu() {
    setIsCollapsed(() => !isCollapsed);
  }

  const publicLinks = [
    { to: "/map", label: "carte" },
    { to: "/signup", label: "s'enregistrer" },
    { to: "/login", label: "se connecter" },
    { to: "/profile", label: "mon profil" },
    { to: "/profile/edit", label: "éditer mon profil" },
    { to: "/profile/addvehicle", label: "ajouter un véhicule" },
    { to: "/profile/editVehicule", label: "éditer mon véhicule" },
    { to: "/news", label: "je suis dans actus" },
    { to: "/news/22", label: "Actualités" },
    { to: "/station/27", label: "station" },
    { to: "/components", label: "Les composants" },
    { to: "/infos", label: "Infos à propos des prises" }
  ]

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

      {publicLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} onClick={() => toggleMenu()}>
              {link.label}
            </NavLink>
          </li>))}

      </ul>
    </nav>
  );
}
