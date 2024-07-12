import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/globals-utilities.css";
import "./styles/globals.css";
import "./styles/responsive.css";
import StationsProvider from "./contexts/StationsProvider";

function App() {
  return (
    <StationsProvider>
      <Navbar />
      <Outlet />
    </StationsProvider>
  );
}

export default App;
