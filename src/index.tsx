import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { AppRoutes } from "./pages/AppRoutes";

import "./assets/style/variables/color.scss";
import "./assets/style/variables/font-weight.scss";

import "./assets/style/mixin/media.scss";

import "./assets/style/reset.scss";
import "./assets/style/common.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
