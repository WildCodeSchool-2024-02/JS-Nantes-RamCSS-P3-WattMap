import { Link } from "react-router-dom";
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <Link to="/Cgv"> Conditions générales de vente</Link> @ WattMap - tous droits
        réservés - 2024
      </p>
    </footer>
  );
}
