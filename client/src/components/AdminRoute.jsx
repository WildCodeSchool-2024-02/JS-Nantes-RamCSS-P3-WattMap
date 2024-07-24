import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../contexts/AuthProvider";

// This component protects the route that should only be accessible when logged in as an admin
export default function AdminRoute({ children }) {
  const { isAdmin } = useAuth();

  return isAdmin ? children : <Navigate to="/login" />;
}

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
