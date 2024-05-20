import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./assets/style/reset.scss";
import "./assets/style/common.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
