import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import "./index.scss";

import App from "./App";

const CustomRouter =
  process.env.NODE_ENV === "production" ? HashRouter : Router;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CustomRouter basename={process.env.PUBLIC_URL}>
    <App />
  </CustomRouter>
);
