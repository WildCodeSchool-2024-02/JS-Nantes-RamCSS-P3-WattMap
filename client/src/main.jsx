import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./pages/Map";
import StationsProvider from "./contexts/StationsProvider";
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
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";


const baseUrl = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "map",
        element:    <StationsProvider><Map /></StationsProvider>,
        loader: () => fetch(`${baseUrl}/api/stations`),
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginSignUp loginIsDisplayedByDefault />,
      },
      {
        path: "signup",
        element: <LoginSignUp loginIsDisplayedByDefault={false} />,
      },
      {
        path: "logout",
        element: <Logout />,
        loader: () =>
          fetch(`${baseUrl}/api/logout`, {
            method: "POST",
            credentials: "include",
          }),
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
            loader: () => fetch(`${baseUrl}/api/users`, {
              method: 'GET',
              credentials: 'include',
            })
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
        loader: () => fetch(`${baseUrl}/api/articles`),
      },
      {
        path: "news/:id",
        element: <News />,
        loader: ({ params }) => fetch(`${baseUrl}/api/articles/${params.id}`),
      },
      {
        path: "components",
        element: <AllComponents />,
      },
      {
        path: "station/:id",
        element: <Station />,
        loader: ({ params }) => fetch(`${baseUrl}/api/stations/${params.id}`),

        errorElement: <h1>404 - Cette page n'existe pas</h1>,
      },
      {
        path: "infos",
        element: <Infos />,
        loader: () => fetch(`${baseUrl}/api/plugtypes`),
      },
      {
        path: "admin",
        element: <Admin />,
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
