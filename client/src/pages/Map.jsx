import { useLoaderData } from "react-router-dom";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import PanelModal from "../components/PanelModal";

import { useStations } from "../contexts/StationsProvider";
import "../styles/map.css";

export default function Map() {
  const stations = useLoaderData();
  const { selectedStation, panelIsDisplayed, setPanelIsDisplayed, setSelectedStation } = useStations();

  return (

    <main>
      <MapContainer
        className="info-panel"
        style={{ height: "100vh", width: "100vw", position: "relative" }}
        center={[48.85897, 2.29324]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <div id="map" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.longitude, station.latitude]}
            eventHandlers={{
              click: () => {
                // this part of the code toggles the panl ONLY if we click twice on the same station ( ie station is selectedStation )
                if (selectedStation && (station.id === selectedStation.id)){
                  setPanelIsDisplayed(!panelIsDisplayed);
                } else {
                  setPanelIsDisplayed(true);
                }
                setSelectedStation(station);
              }
            }}
            />
        ))}
      </MapContainer>
      <PanelModal />
    </main>
  );
}
