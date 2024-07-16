import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/globals-utilities.css";
import "./styles/globals.css";
import "./styles/responsive.css";
import StationsProvider from "./contexts/StationsProvider";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <StationsProvider>
        <Navbar />
        <Outlet />
      </StationsProvider>
    </AuthProvider>
  );
}

export default App;
