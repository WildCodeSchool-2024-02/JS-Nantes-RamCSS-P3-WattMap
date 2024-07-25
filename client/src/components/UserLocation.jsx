import { useState, useEffect } from "react";
import { Popup, Marker, useMap } from "react-leaflet";
import { usePosition } from "../contexts/PositionProvider";
import "../styles/modal.css";

export default function UserLocation() {
  const { userLocation, setUserLocation } = usePosition();

  // This state is used to open and close the modal that asks for geolocation
  const [modalIsOpen, setModalIsOpen] = useState(true);

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

  const map = useMap();

  useEffect(() => {
    map.setView(userLocation, 15);
  }, [map, userLocation]);

  return (
    <>
      <Marker position={userLocation}>
        <Popup>
          <p>Votre position</p>
        </Popup>
      </Marker>
      {modalIsOpen && (
        <dialog className="modal" aria-labelledby="title_dialog">
          <div className="modal-content justify-content-between">
            <h2 className="title-modal" id="title_dialog">Partagez votre position pour voir les bornes autour de vous</h2>
            <section className="w-100 d-flex gap-2 justify-content-between mt-2">
              <button
                className="btn btn-disable"
                onClick={() => setModalIsOpen(false)}
                type="button"
              >
                RETOUR
              </button>
              <button
                onClick={() => {
                  getUserLocation();
                  setModalIsOpen(false);
                }}
                className="btn btn-default"
                type="button"
              >
                ACTIVER LA GEOLOCALISATION
              </button>
            </section>
          </div>
        </dialog>
      )}
    </>
  );
}
