import { useEffect } from "react";
import { Popup, Marker, useMap } from "react-leaflet";
import { usePosition } from "../contexts/PositionProvider";

export default function UserLocation() {
  const { userLocation, setUserLocation } = usePosition();

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]),
        () => console.warn("Unable to retrieve your location")
      );
    } else {
      console.warn("Geolocation not supported");
    }
  }

  useEffect(getUserLocation, []);
  const map = useMap();

  useEffect(() => {
    map.setView(userLocation, 15);
  }, [userLocation]);

  return (
    <Marker position={userLocation}>
      <Popup>
        <p>Votre position</p>
      </Popup>
    </Marker>
  );
}
