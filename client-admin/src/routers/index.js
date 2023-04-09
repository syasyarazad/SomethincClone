import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import CategoriesPage from "../pages/categories";
import FormCategoryPage from "../pages/form-category";
import FormProductPage from "../pages/form-product";
import ImagesProductPage from "../pages/images-product";
import LoginPage from "../pages/login";
import ProductsPage from "../pages/products";
import RegisterPage from "../pages/register";

const router = createBrowserRouter([
  {
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }

      return null;
    },
    path: "/login",
    element: <LoginPage />,
  },
  {
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/login");
      }

      return null;
    },
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/product-form",
        element: <FormProductPage />,
      },
      {
        path: "/product-form/:id",
        element: <FormProductPage />,
      },
      {
        path: "/images/:id",
        element: <ImagesProductPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/category-form",
        element: <FormCategoryPage />,
      },
      {
        path: "/category-form/:id",
        element: <FormCategoryPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
