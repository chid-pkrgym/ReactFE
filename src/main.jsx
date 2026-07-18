import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="fixed inset-0 bg-[#0e1312] overflow-auto">
      <App />
    </div>
  </StrictMode>,
);
