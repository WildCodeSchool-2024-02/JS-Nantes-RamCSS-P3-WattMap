import { Link } from "react-router-dom";
import { useStations } from "../contexts/StationsProvider";
import CardStation from "./CardStation";

export default function PanelModal() {
  const { panelIsDisplayed, setPanelIsDisplayed, selectedStation } =
    useStations();

  return (
    <section className={`panel-modal${!panelIsDisplayed ? " hidden" : ""}`}>
      <button
        className="close-modal-button"
        type="button"
        onClick={() => setPanelIsDisplayed(false)}
      >
        ✖️
      </button>
      {selectedStation && (
        <>
          <CardStation
            classname="cardstation"
            displayMode={1}
            station={selectedStation}
          />
          <Link className="button-card" to={`/station/${selectedStation.id}`}>
            REVERVER
          </Link>
        </>
      )}
    </section>
  );
}
