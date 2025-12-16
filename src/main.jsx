import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewsContextComp } from "./Context/NewsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsContextComp>
      <App />
    </NewsContextComp>
  </StrictMode>
);
