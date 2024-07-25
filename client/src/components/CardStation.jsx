import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icons from "./Icons";
import PlugInfos from "./PlugInfos";
import CancelReservationButton from "./CancelReservationButton";

export default function CardStation({
  displayMode = 0,
  station,
  date = "",
  reservationId = 0,
}) {
  // TODO : A LOT of refactorisation is needed here.

  // displayMode is a prop that was introduced in order to change the apparence of some elements inside of the component
  // 1 : plug mode, all of the available plugs at this station are displayed
  // 0 : receipt mode - used to display past reservations
  // 2 : future mode - used to display future reservations, and possibly cancel them

  return (
    <article className="card card-station">
      <header>
        <figure className="rounded-img">
          <img
            src={`${import.meta.env.VITE_API_URL}${station.imgUrl}`}
            alt="borne de recharge"
          />
        </figure>
        <div className="infos-card">
          <h3 className="title-card">{station.name}</h3>

          {(displayMode === 0 || displayMode === 2) && (
            <div className="d-flex flex-column align-items-right">
              <time dateTime="">{date}</time>
              <p className="price-station">10€</p>
            </div>
          )}

          {displayMode === 1 && (
            <div className="d-flex align-items-center infos-card">
              <Icons choiceIcon="pin" />
              <address>{station.address}</address>
            </div>
          )}
        </div>
      </header>

      {(displayMode === 0 || displayMode === 2) && (
        <div className="d-flex align-items-center infos-card">
          <Icons choiceIcon="pin" />
          <address>{station.address}</address>
        </div>
      )}

      {displayMode === 0 && (
        <section className="w-100 d-flex flex-row justify-content-center infos-card">
          <Link to="components" className="btn btn-default">
            Télécharger la facture
          </Link>
        </section>
      )}

      {displayMode === 2 && (
        <section className="w-100 d-flex flex-row justify-content-center infos-card">
          <CancelReservationButton reservationId={reservationId}/>
        </section>
      )}

      {displayMode === 1 && (
        <section className="d-flex flex-row flex-wrap">
          {station.plugs.map((plug) => {
            let type = "";
            if (plug.plugId === 1) {
              type = "type 1";
            } else if (plug.plugId === 2) {
              type = "type 2";
            } else if (plug.plugId === 3) {
              type = "combo CCS";
            } else if (plug.plugId === 4) {
              type = "chademo";
            }
            return (
              <PlugInfos
                key={`${station.id}-${plug.type}`}
                plug={{
                  type,
                  maxPower: plug.maxPower,
                  quantity: plug.quantity,
                }}
              />
            );
          })}
        </section>
      )}
    </article>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
CardStation.propTypes = {
  displayMode: PropTypes.number,
  station: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    address: PropTypes.string,
    imgUrl: PropTypes.string,
    plugs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        stationId: PropTypes.number,
        plugId: PropTypes.number,
        maxPower: PropTypes.number,
        price: PropTypes.number,
      })
    ),
  }),
  date: PropTypes.string,
  reservationId: PropTypes.number,
};
