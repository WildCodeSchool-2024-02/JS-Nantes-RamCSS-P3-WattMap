import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icons from "./Icons";
import PlugInfos from "./PlugInfos";

export default function CardStation({ displayMode = 0, station }) {
  // TODO : A LOT of refactorisation is needed here.

  return (
    <div className="flex-row">
      <article className="card card-station">

        <section className="d-flex align-items-center">
          <figure className="rounded-img">
            <img src={`${import.meta.env.VITE_API_URL}${station.img_url}`} alt="test" />
          </figure>
          <div className="infos-card">
            <h3 className="title-card">{station.name}</h3>
            <div className="d-flex align-items-center">
              <Icons choiceIcon="home" />
              <time dateTime="2023-07-07">07-07-2023</time>
              <p className="price-station">10€</p>
            </div>
          </div>
        </section>

        {displayMode === 0 && (
          <section>
            <address>{station.address}</address>
            <Link to="components" className="btn btn-contour">
              Télécharger la facture
            </Link>
          </section>
        )}

        {displayMode === 1 && (
          <main>
            <PlugInfos
              plugType={{ type: "demo plug", imgUrl: "fr", maxPower: 10 }}
            />
          </main>
        )}
      </article>
    </div>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
CardStation.propTypes = {
  displayMode: PropTypes.string,
  station: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    address: PropTypes.string,
    img_url: PropTypes.string,
    plugs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        station_id: PropTypes.number,
        plug_id: PropTypes.number,
        max_power: PropTypes.number,
        price: PropTypes.number,
      })
    ),
  }),
};
