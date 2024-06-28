import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";
import Icons from "./Icons";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleMenu() {
    setIsCollapsed(() => !isCollapsed);
  }

  const publicLinks = [
    { to: "/", label: "acceuil", icon:"home" },
    { to: "/login", label: "s'enregistrer", icon:"map" },
    { to: "/login", label: "se connecter", icon:"lock-key-open" },
    { to: "/map", label: "carte", icon:"map" },
    { to: "/news", label: "je suis dans actus", icon:"map" },
    { to: "/news/22", label: "Actualités", icon:"map" },
    { to: "/station/27", label: "station", icon:"gas-station" },
    { to: "/components", label: "Les composants", icon:"map" },
    { to: "/infos", label: "Infos à propos des prises", icon:"information" },
    { to: "/contact", label: "nous contacter", icon:"enveloppe" },
  ];

  const userLinks = [
    { to: "/profile", label: "mon profil", icon:"" },
    { to: "/profile/edit", label: "éditer mon profil", icon:"" },
    { to: "/profile/addvehicle", label: "ajouter un véhicule", icon:"car" },
    { to: "/profile/editVehicule", label: "éditer mon véhicule", icon:"car" }
  ];

  // TODO : change concatenation depending on some context when the user is logged in 
  const links = publicLinks.concat(userLinks)

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
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} onClick={() => toggleMenu()}>
              <Icons choiceIcon={link.icon}/>{link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
