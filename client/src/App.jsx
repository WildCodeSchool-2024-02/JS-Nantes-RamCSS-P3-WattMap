import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/globals.css";
import "./styles/responsive.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
