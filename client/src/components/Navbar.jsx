import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import "../styles/navBar.css";
import Icons from "./Icons";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { isLoggedIn, isAdmin } = useAuth();

  function toggleMenu() {
    setIsCollapsed(() => !isCollapsed);
  }

  const loginLinks = [{ to: "/login", label: "se connecter", icon: "user" }];

  const logoutLinks = [{ to: "/logout", label: "déconnexion", icon: "logout" }];

  const publicLinks = [
    { to: "/", label: "Acceuil", icon: "house" },
    { to: "/map", label: "Carte", icon: "map" },
    { to: "/news", label: "Actualités", icon: "rotating-beacon" },
    { to: "/infos", label: "A propos des prises", icon: "information" },
  ];

  const contact = [{ to: "/contact", label: "Contact", icon: "enveloppe" }];

  const userLinks = [
    { to: "/profile", label: "mon profil", icon: "user" },
    { to: "/bookings", label: "mes réservations", icon: "" },
  ];

  const adminLinks = userLinks.concat([
    { to: "/admin", label: "Admin", icon: "admin" },
  ]);

  const links = isLoggedIn
    ? publicLinks
        .concat(isAdmin ? adminLinks : userLinks)
        .concat(logoutLinks)
        .concat(contact)
    : publicLinks.concat(loginLinks).concat(contact);

  return (
    <nav className={`navbar${isCollapsed ? " collapsed" : ""}`}>
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

      <ul className="nav">
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
