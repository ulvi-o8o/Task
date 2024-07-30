import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";
import Layout from "./features/layout/layout";
import ErrorPage from "./common/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
