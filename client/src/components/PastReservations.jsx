import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardStation from "./CardStation";

export default function PastReservations({ reservations = [] }) {
  return (
    <section>
      {reservations.length>=1 ? (
        <ul>
          {reservations.map((reservation) => {
            // this part is used to convert date into a readable string
            const date = new Date(reservation.date);
            const dateString = `${date.toLocaleDateString("fr")} - ${date.toLocaleTimeString(["fr"], { hour: "2-digit", minute: "2-digit" })}`;
            return (
              <li
                key={reservation.date + reservation.stationId}
                className="list-unstyled"
              >
                <CardStation
                  displayMode={0}
                  station={{
                    name: reservation.stationName,
                    address: reservation.stationAddress,
                    imgUrl: reservation.stationImgUrl,
                  }}
                  date={dateString}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="d-flex flex-column">
        <p>Aucune réservation dans l'historique</p>
        <Link className="btn btn-default" to="/map">
          Voir la carte
        </Link>
      </div>
      )}
    </section>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
PastReservations.propTypes = {
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      stationId: PropTypes.number.isRequired,
      stationAddress: PropTypes.string.isRequired,
      stationImgUrl: PropTypes.string.isRequired,
      stationName: PropTypes.string.isRequired,
    })
  ),
};
