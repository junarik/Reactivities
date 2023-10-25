import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";
import { StoreContext, store } from "./app/stores/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </React.StrictMode>
);
