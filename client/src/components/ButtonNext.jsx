import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/buttonNext.css";

export default function ButtonNext({ anchorID, text, icon }) {
  return (
    <Link
      to={`#${anchorID}`}
          className="btn-next"
      aria-label={`Section ${text}`}
    >
          <span className="libelle">{text}</span>
          <span className="bounce"><Icons choiceIcon={icon} /></span>
      
    </Link>
  );
}

ButtonNext.propTypes = {
  anchorID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
