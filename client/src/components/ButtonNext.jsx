import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/buttonNext.css";

export default function ButtonNext({ sectionRef, label, scrollToSection, icon }) {

    return (
        <button type="button" onClick={() => scrollToSection(sectionRef)}
            className="btn-next"
            aria-label={`Section ${label}`}
        >
            <span className="libelle">{label}</span>
            <span className="bounce"><Icons choiceIcon={icon} /></span>
        </button>
    );
}

ButtonNext.propTypes = {
    sectionRef: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    scrollToSection: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
