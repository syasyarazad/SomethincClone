import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import DetailProductPage from "../pages/detail";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import ProductsPage from "../pages/products";
import RegisterPage from "../pages/register";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <DetailProductPage />,
      },
    ],
  },
]);

export default router;
