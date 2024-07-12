import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const StationsContext = createContext();

function StationsProvider({ children }) {
  const [panelIsDisplayed, setPanelIsDisplayed] = useState(false);

  const contextValue = useMemo(
    () => ({
      panelIsDisplayed,
      setPanelIsDisplayed,
    }),
    [panelIsDisplayed]
  );

  return (
    <StationsContext.Provider value={contextValue}>
      {children}
    </StationsContext.Provider>
  );
}

export const useStations = () => useContext(StationsContext);

StationsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StationsProvider;
