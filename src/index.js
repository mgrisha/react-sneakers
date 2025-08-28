import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

import App from "./App";

// const CustomRouter =
//   process.env.NODE_ENV === "production" ? HashRouter : Router;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
);
