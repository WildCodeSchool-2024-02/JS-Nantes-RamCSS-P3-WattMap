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
    { to: "/signup", label: "s'enregistrer" },
    { to: "/map", label: "carte" },
    { to: "/login", label: "se connecter" },
    { to: "/news", label: "je suis dans actus" },
    { to: "/news/22", label: "Actualités" },
    { to: "/station/27", label: "station" },
    { to: "/components", label: "Les composants" },
    { to: "/infos", label: "Infos à propos des prises" },
  ];

  const userLinks = [
    { to: "/profile", label: "mon profil" },
    { to: "/profile/edit", label: "éditer mon profil" },
    { to: "/profile/addvehicle", label: "ajouter un véhicule" },
    { to: "/profile/editVehicule", label: "éditer mon véhicule" }
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
              <Icons />{link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
