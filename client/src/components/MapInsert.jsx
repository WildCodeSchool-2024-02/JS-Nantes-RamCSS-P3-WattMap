import "../styles/map.css";
// import { useMap } from "react-leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapInsert() {
  return (
    <MapContainer
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
      <Marker position={[48.85897, 2.29324]}>
        <Popup>
          ici les frere <br /> tour effeil
        </Popup>
      </Marker>
    </MapContainer>
  );
}
