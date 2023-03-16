import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";

ReactDom.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.getElementById("root")
);
