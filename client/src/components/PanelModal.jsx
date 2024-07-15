import { useStations } from "../contexts/StationsProvider";

export default function PanelModal() {
  const { panelIsDisplayed, setPanelIsDisplayed } = useStations();

  return (
    <section className={`panel-modal${!panelIsDisplayed ? "-hidden" : ""}`}>
      <div>
        <button
          className="button-map"
          type="button"
          onClick={() => setPanelIsDisplayed(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
}
