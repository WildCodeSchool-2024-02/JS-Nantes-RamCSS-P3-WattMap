import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import App from "./App";
import Signup from "./pages/Signup";
import Map from "./pages/Map";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AddVehicle from "./pages/AddVehicle";
import Login from "./pages/Login";
import MyReservations from "./pages/MyReservation";
import EditVehicule from "./pages/EditVehicule";
import NewsOverview from "./pages/NewsOverview";
import News from "./pages/News";
import AllComponents from "./pages/AllComponents";
import Station from "./pages/Station";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile/",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
          {
            path: "bookings",
            element: <MyReservations />,
          },
          {
            path: "addvehicle",
            element: <AddVehicle />,
          },
          {
            path: "editvehicule",
            element: <EditVehicule />,
          },
        ],
      },
      {
        path: "news",
        element: <NewsOverview />,
      },
      {
        path: "news/:id",
        element: <News />
      },
      {
        path: "components",
        element: <AllComponents />,
      },
      {
        path: "station/:id",
        element: <Station />
      }

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
