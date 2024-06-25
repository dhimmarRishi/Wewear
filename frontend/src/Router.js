import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/Login";
import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "account",
        children: [
          {
            path: "register",
            element: <CreateAccount />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path : "products",
        element : <ProductPage />
      }
    ],
  },
]);

export default router;
