import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import 'react-calendar/dist/Calendar.css'
import { router } from "./app/router/Routes";
import { RouterProvider } from "react-router-dom";
import { StoreContext, store } from "./app/stores/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </React.StrictMode>
);
