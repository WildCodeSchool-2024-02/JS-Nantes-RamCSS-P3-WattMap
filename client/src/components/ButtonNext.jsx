import PropTypes from "prop-types";
import "../styles/buttonNext.css";
import Icons from "./Icons";

export default function ButtonNext({ classCustom, sectionRef, label, scrollToSection, icon }) {

    return (
        <button type="button" onClick={() => scrollToSection(sectionRef)}
            className={`btn-next ${classCustom}`}
            aria-label={`Section ${label}`}
        >
            <span className="libelle">{label}</span>
            <span className="bounce"><Icons choiceIcon={icon} /></span>
        </button>
    );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
ButtonNext.propTypes = {
    classCustom: PropTypes.string,
    sectionRef: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    scrollToSection: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
