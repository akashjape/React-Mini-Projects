import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { InfoProvider } from "./components/store/WeatherContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </StrictMode>
);
