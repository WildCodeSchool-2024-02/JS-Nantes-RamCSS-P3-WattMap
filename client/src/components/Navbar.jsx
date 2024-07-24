import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import "../styles/navBar.css";
import Icons from "./Icons";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { isLoggedIn } = useAuth();

  function toggleMenu() {
    setIsCollapsed(() => !isCollapsed);
  }

  const loginLinks = [
    { to: "/signup", label: "s'enregistrer", icon: "pen" },
    { to: "/login", label: "se connecter", icon: "user" },
  ];

  const logoutLinks = [{ to: "/logout", label: "déconnexion", icon: "user" }];

  const publicLinks = [
    { to: "/", label: "acceuil", icon: "house" },
    { to: "/map", label: "carte", icon: "map" },
    { to: "/news", label: "Actualités", icon: "rotating-beacon" },
    { to: "/infos", label: "Infos à propos des prises", icon: "information" },
    { to: "/contact", label: "nous contacter", icon: "enveloppe" },
    { to: "/Cgv", label: "conditions générales de vente", icon:"cgv", }
  ];

  const userLinks = [
    { to: "/bookings", label: "mes réservations", icon: "" },
    { to: "/profile", label: "mon profil", icon: "user" },
    { to: "/profile/edit", label: "éditer mon profil", icon: "user" },
    { to: "/profile/addvehicle", label: "ajouter un véhicule", icon: "car" },
    { to: "/profile/editVehicule", label: "éditer mon véhicule", icon: "car" },
    { to: "/admin", label: "Admin", icon: "admin" },
  ];

  const links = isLoggedIn ? publicLinks.concat(userLinks).concat(logoutLinks) : loginLinks.concat(publicLinks);

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
              <Icons choiceIcon={link.icon} />
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
