import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import Curs from "../pages/Curs";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "login",
            element: <LogIn />,
          },
          {
            path: "curs",
            element: <Curs />,
          },
    ],
  },
]);

export default router;
