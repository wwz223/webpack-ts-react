import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routers from "config/routers";
import "./index.css";

const container = document.getElementById("app") as HTMLElement;

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <RouterProvider router={routers} />
    </React.StrictMode>
  );
} else {
  console.log("with out app element");
}
