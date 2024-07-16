import PropTypes from "prop-types";

export default function FutureReservations({ reservations }) {
  return (
    <p>
      {reservations
        ? "voila vos résa"
        : "Aucune réservation de prévue, voir la carte ?"}
    </p>
  );
}

// linter was disabled because of default props soon to be deprecated
/* eslint-disable react/require-default-props */
FutureReservations.propTypes = {
  reservations: PropTypes.string,
};
