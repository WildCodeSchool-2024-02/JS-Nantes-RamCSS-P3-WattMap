import { useState } from "react";

function DatePicker() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <article className="card">
      <section className="d-flex flex-row justify-content-between w-100">
        <h2>07/01/2023</h2>
        <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
          ouvrir
        </button>
      </section>

      <section className={`date-wrapper ${isCollapsed ? "collapsed" : ""}`}>
        les dates
      </section>
    </article>
  );
}

export default DatePicker;
