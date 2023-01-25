import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { defineCustomElement as defineButton } from "emergn-design-poc/dist/components/emergn-button";
import { defineCustomElement as defineInput } from "emergn-design-poc/dist/components/emergn-input";

import "emergn-design-poc/dist/emergn-design-poc/emergn-design-poc.css";
import "./custom-theme.css";

defineButton();
defineInput();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
