import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import App from "./components/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="fixed inset-0 bg-[#0e1312] overflow-auto">
      <div className="flex flex-col min-w-[768px] h-full">
        <Header />
        <App />
      </div>
    </div>
  </StrictMode>,
);
