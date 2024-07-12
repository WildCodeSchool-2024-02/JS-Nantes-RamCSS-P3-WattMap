import { useState, useContext, useMemo, createContext, useEffect } from "react";
import PropTypes from "prop-types";
// import Cookies from "js-cookie";

// this context is a component that we'll use
const AuthContext = createContext();

// this is the context provider that goes with it.
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);

  // we'll use the user route to check with the server if the user is logged in
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const res = await response.json();
          console.info("Logged", res);
          setIsLoggedIn(true);
        } else {
          console.info("auth NIET");
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    handleFetch();
  }, []);

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
