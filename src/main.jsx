import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <MainLayout />
  </RouterProvider>
);
