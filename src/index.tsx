import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@/components/Button";
import "./index.css";
const container = document.getElementById("app") as HTMLElement;

if (container) {
  const root = createRoot(container);

  root.render(<Button />);
} else {
  console.log("with out app element");
}
