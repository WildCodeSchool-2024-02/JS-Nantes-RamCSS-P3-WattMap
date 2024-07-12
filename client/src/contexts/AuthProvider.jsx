import { useState, useContext, useMemo, createContext } from "react";
import PropTypes from "prop-types";

// this context is a component that we'll use
const AuthContext = createContext();


// this is the context provider that goes with it.
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={useMemo({ isLoggedIn, setIsLoggedIn})}
    >
      {children}
    </AuthContext.Provider>
  );
}

// enable you to import easier in the components that consume the context
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
