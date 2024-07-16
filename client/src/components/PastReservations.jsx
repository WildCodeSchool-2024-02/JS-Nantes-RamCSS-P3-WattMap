import PropTypes from "prop-types";

export default function PastReservations({ reservations }) {
  return (<p>
      {reservations
        ? "voila vos résa"
        : "Aucune réservation dans l'historique, voir la carte ?"}</p>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
PastReservations.propTypes = {
  reservations: PropTypes.string,
};
