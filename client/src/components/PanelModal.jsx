import { Link } from "react-router-dom";
import { useStations } from "../contexts/StationsProvider";
import CardStation from "./CardStation";

export default function PanelModal() {
  const { panelIsDisplayed, setPanelIsDisplayed, selectedStation } =
    useStations();

  return (
    <section className={`panel-modal${!panelIsDisplayed ? " hidden" : ""}`}>
      {selectedStation && (
        <>
          <CardStation
            classname="cardstation"
            displayMode={1}
            station={selectedStation}
          />
          <div className="w-100 d-flex flex-row justify-content-center m-b-4">
            <Link
              className="btn btn-default"
              to={`/station/${selectedStation.id}`}
            >
              Réserver
            </Link>
          </div>
        </>
      )}
      <button
        className="close-modal-button"
        type="button"
        onClick={() => setPanelIsDisplayed(false)}
      >
        ✖️
      </button>
    </section>
  );
}
