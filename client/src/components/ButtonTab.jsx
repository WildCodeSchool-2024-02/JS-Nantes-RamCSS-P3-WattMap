import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/ButtonTab.css";

export default function ButtonTab({ classCustom, sectionAdminRef, label, handleTabClick, icon }) {
    return (
        <button type="button" onClick={() => handleTabClick(sectionAdminRef, label)}
            className={`btn-tab ${classCustom}`}
            aria-label={`Section ${label}`}
        >
            <span className="icon-btn-tab"><Icons choiceIcon={icon} /></span>
            <span className="libelle">{label}</span>
        </button>
    );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
ButtonTab.propTypes = {
    classCustom: PropTypes.string,
    sectionAdminRef: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleTabClick: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
};
