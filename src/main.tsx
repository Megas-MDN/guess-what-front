import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/_index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer theme="colored" />
    <RouterProvider router={appRoutes} />
  </StrictMode>,
);
