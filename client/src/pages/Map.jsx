import { useLoaderData } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CardStation from "../components/CardStation";
import PanelModal from "../components/PanelModal";
import { useStations } from "../contexts/StationsProvider";
import "../styles/map.css";

export default function Map() {
  const stations = useLoaderData();
  const { panelIsDisplayed, setPanelIsDisplayed } = useStations();

  console.warn("Coucou", stations)

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
            position={[station.latitude, station.longitude]}
            eventHandlers={{
              click: () => {
                setPanelIsDisplayed(!panelIsDisplayed);
              },
            }}
          >
            <Popup>
              {station.name}
              <CardStation
                classname="cardstation"
                displayMode={1}
                station={station}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <PanelModal />
    </main>
  );
}
