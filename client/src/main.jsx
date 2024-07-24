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
import EditVehicle from "./pages/EditVehicule";
import NewsOverview from "./pages/NewsOverview";
import News from "./pages/News";
import Station from "./pages/Station";
import Infos from "./pages/Infos";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import Reservations from "./pages/Reservations";
import ConditionGénéralUtilisation from "./pages/ConditionGénéralUtilisation";
import Admin from "./pages/Admin";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

const baseUrl = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "map",
        element: (
          <StationsProvider>
            <Map />
          </StationsProvider>
        ),
        loader: () => fetch(`${baseUrl}/api/stations`),
      },
      {
        path: "",
        element: <Home />,
        loader: () => fetch(`${baseUrl}/api/articles`)
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
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
            loader: () => fetch(`${baseUrl}/api/users`, {
              method: 'GET',
              credentials: 'include',
            })
          },
          {
            path: "edit",
            element: (
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(`${baseUrl}/api/users`, {
                method: "GET",
                credentials: "include",
              }),
          },
          {
            path: "addvehicle",
            element: (
              <PrivateRoute>
                <AddVehicle />
              </PrivateRoute>
            ),
            loader: () => fetch(`${baseUrl}/api/plugtypes`),
          },
          {
            path: "editvehicle/:id",
            element: (
              <PrivateRoute>
                <EditVehicle />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "Cgv",
        element: <ConditionGénéralUtilisation />,
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
        path: "bookings",
        element: (
          <PrivateRoute>
            <Reservations />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`${baseUrl}/api/reservations`, { credentials: "include" }),
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Admin />
          </AdminRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
