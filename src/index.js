import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./util/Constants.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Notfound from "./pages/Notfound";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainScrollWrap from "./coponents/MainScrollWrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
    children: [
      { path: "/", index: true, element: <Main /> },
      { path: "/portfolio/:title", element: <Portfolio /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
