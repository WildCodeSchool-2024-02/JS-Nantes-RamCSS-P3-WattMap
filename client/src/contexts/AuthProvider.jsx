import { useState, useContext, useMemo, createContext } from "react";
import PropTypes from "prop-types";

// this context is a component that we'll use
const AuthContext = createContext();

// this is the context provider that goes with it.
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Memoize the context value to avoid unnecessary re-renders, and to make the linter happy
  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
    }),
    [isLoggedIn]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// enable you to import easier in the components that consume the context
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
