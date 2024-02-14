import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "reset-css";
import "./index.scss";
import LandingPage from "./routes/landing";

const router = createBrowserRouter([{ path: "/", element: <LandingPage /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
