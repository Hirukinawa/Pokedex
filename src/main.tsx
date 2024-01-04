/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import Home from "./components/pages/Home.tsx";
import PokemonDetails from "./components/pages/PokemonDetails.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/pages/Usuarios.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
  {
    path: "/usuarios",
    element: <Users />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
