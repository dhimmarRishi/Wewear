import { createBrowserRouter } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/Login";
import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import ProductPage from "./Components/ProductPage";
import SingleProduct from "./Components/SingleProduct";
import CartPage from "./Components/CartPage";
import AboutUs from "./Components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path : 'aboutus',
        element: <AboutUs />
      },
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
          {
            path: "cart",
            element: <CartPage />,
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
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/:productId",
        element: <SingleProduct />
      },

    ],
  },
]);

export default router;
