import { createContext, useContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const PositionContext = createContext();

export default function PositionProvider({ children }) {
  const [userLocation, setUserLocation] = useState(
    localStorage.getItem("userLocation") === null
      ? [48.866, 2.33333]
      : localStorage.getItem("userLocation").split(",")
  );

  useEffect(() => {
    localStorage.setItem("userLocation", userLocation.toString());
  }, [userLocation]);

  const contextValue = useMemo(
    () => ({
        userLocation,
        setUserLocation,
      }),
    [userLocation, setUserLocation]
  )

  return (
    <PositionContext.Provider
      value={contextValue}
    >
      {children}
    </PositionContext.Provider>
  );
}

export function usePosition() {
  return useContext(PositionContext);
}

PositionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
