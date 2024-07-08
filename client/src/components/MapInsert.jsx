import "../styles/map.css";
// import { useMap } from "react-leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapInsert() {
  const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;

  // var map = L.map('map').setView([51.505, -0.09], 13);

  return (
    <MapContainer
      className="map"
      center={[48.866667, 2.333333]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={attribution}
        url="https://{s}.tile.openstreetmap.org/{48.8609736792636}/{2.955383424973}.png"
      />
      <Marker position={[48.866667, 2.333333]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
