import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/index.scss";
import "./assets/scss/app.scss";
import "./assets/scss/media.scss";
import LayoutProvider from "./contexts/LayoutProvider";

ReactDOM.render(
  <React.StrictMode>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
