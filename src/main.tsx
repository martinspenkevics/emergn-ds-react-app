import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "emergn-design-poc/dist/emergn-design-poc/emergn-design-poc.css";
import "./custom-theme.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
