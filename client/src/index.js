import React from "react";
import { MenuProvider } from "./MenuContext";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MenuProvider>
    <App />
  </MenuProvider>
);
