import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>
);
