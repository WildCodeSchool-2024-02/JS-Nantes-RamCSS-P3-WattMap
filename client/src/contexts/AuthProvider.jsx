import { useState, useContext, useMemo, createContext, useEffect } from "react";
import PropTypes from "prop-types";

// this context is a component that we'll use
const AuthContext = createContext();

// this is the context provider that goes with it.
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // this state is used to wait for the server to respond
  const [loading, setLoading] = useState(true);

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
          // we'll look inside the server sersponse to know wheter the user is an admin or not
          if (res.isAdmin) {
            setIsAdmin(true);
          }
          setIsLoggedIn(true);
        } else {
          if (isAdmin) setIsAdmin(false);
          setIsLoggedIn(false);
        }
        setLoading(false);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    handleFetch();
  }, []);

  // Memoize the context value to avoid unnecessary re-renders, and to make the linter happy
  // use in order to prevent a re-render cycle when a consumer of the context updates it
  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      isAdmin,
      setIsAdmin,
    }),
    [isLoggedIn]
  );

  return loading ? (
    <h1 className="text-center">LOADING</h1>
  ) : (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// enable you to import easier in the components that consume the context
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
