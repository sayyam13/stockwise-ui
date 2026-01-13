import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashboardDeployed } from "./screens/DashboardDeployed";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DashboardDeployed />
  </StrictMode>,
);
