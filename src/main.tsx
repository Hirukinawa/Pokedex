/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home.tsx";
import PokemonDetails from "./components/pages/PokemonDetails.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoveDetails from "./components/pages/MoveDetails.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetails />,
  },
  {
    path: "/movimento/:name",
    element: <MoveDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
