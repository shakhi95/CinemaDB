import React from "react";
import ReactDOM from "react-dom";

import "./bootstrap.min.css";
import "./cinemaDB.css";

import App from "./App";
import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
