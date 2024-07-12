import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/globals-utilities.css";
import "./styles/globals.css";
import "./styles/responsive.css";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  );
}

export default App;
