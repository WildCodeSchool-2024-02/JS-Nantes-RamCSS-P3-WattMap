import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./pages/Map";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AddVehicle from "./pages/AddVehicle";
import LoginSignUp from "./pages/LoginSignUp";
import MyReservations from "./pages/MyReservation";
import EditVehicule from "./pages/EditVehicule";
import NewsOverview from "./pages/NewsOverview";
import News from "./pages/News";
import AllComponents from "./pages/AllComponents";
import Station from "./pages/Station";
import Infos from "./pages/Infos";
import Contact from "./pages/Contact";

const baseUrl = import.meta.env.VITE_API_URL;

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
        path: "login",
        element: <LoginSignUp />,
      },
      {
        path: "contact",
        element: <Contact />,
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
        loader: () => fetch(`${baseUrl.concat("/api/articles")}`),
      },
      {
        path: "news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`${baseUrl.concat(`/api/articles/${params.id}`)}`),
      },
      {
        path: "components",
        element: <AllComponents />,
      },
      {
        path: "station/:id",
        element: <Station />,
      },
      {
        path: "infos",
        element: <Infos />,
        loader: () => fetch(`${baseUrl.concat("/api/plugtypes")}`),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// loader: () => fetch(`${import.meta.env.VITE_API_URL.concat('','/api/plugtypes')}`),
