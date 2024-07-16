import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/ButtonTab.css";

export default function ButtonAdmin({ sectionRef, label, handleTabClick, icon }) {

    return (
        <button type="button" onClick={() => handleTabClick(sectionRef)}
            className="btn-tab"
            aria-label={`Section ${label}`}
        >
            <span className="libelle">{label}</span>
            <span className="bounce"><Icons choiceIcon={icon} /></span>
        </button>
    );
}


ButtonAdmin.propTypes = {
    sectionRef: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleTabClick: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
