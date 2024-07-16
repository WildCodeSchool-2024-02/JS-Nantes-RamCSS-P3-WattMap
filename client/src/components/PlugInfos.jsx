import PropTypes from "prop-types";
import Icons from "./Icons";
import "../styles/plugInfos.css";

export default function PlugInfos({ compact = true, plug }) {
  // WARNING : make sure .env is created to see the image appear
  return (
    <figure
      className={`plug-infos ${compact ? "compact" : "active"} text-center`}
      role="figure"
      aria-label={`Prise ${plug.type} Puissance ${plug.type}`}
    >
      <Icons choiceIcon={plug.type} />
      <figcaption>
        <span className="visually-hidden">Prise {plug.type} puissance</span>{" "}
        {plug.type}
        {compact && (
          <>
            <p className="available-plugs">{`${plug.quantity}/${plug.quantity}`}</p>
            <p>{`${plug.maxPower} kW`}</p>
          </>
        )}
      </figcaption>
    </figure>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
PlugInfos.propTypes = {
  plug: PropTypes.shape({
    type: PropTypes.string,
    maxPower: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  compact: PropTypes.bool,
};
