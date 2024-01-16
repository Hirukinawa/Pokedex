/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home.tsx";
import PokemonDetails from "./components/pages/PokemonDetails.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./components/pages/Usuarios.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
  {
    path: "/favoritos",
    element: <Users />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
