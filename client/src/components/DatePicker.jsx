import { useState } from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/datePicker.css";

// This is a Date / Time Slot picker component, it displays all the available time slots at a particular date.

function DatePicker({ day = new Date() }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // used to display the date in a human readable way
  const displayOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const timeSlots = ["9h00-9h30", "9h30-10h00", "10h00-10h30", "10h30-11h00"];

  return (
    <article className={`card ${isCollapsed ? "collapsed" : ""}`}>
      <section className="d-flex flex-row justify-content-between align-items-center w-100">
        <h3 className="title-card">
          {day.toLocaleDateString("fr-FR", displayOptions)}
        </h3>
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={`Voir créneaux disponibles le ${day}`}
          className={`dropdown-btn ${isCollapsed ? "collapsed" : ""}`}
        >
          <Icons choiceIcon="arrow-down" />
        </button>
      </section>

      <section
        className={`d-flex flex-row flex-wrap gap-2 date-wrapper ${isCollapsed ? "collapsed" : ""}`}
      >
        {timeSlots.map((timeSlot) => (
          <button
            type="button"
            key={`${day.getMilliseconds()}${timeSlot}`}
            className="btn btn-default mt-3"
          >
            {timeSlot}
          </button>
        ))}
      </section>
    </article>
  );
}

export default DatePicker;

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
DatePicker.propTypes = {
  day: PropTypes.instanceOf(Date),
};
