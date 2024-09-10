import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";
import CoursesPage from "../pages/CoursesPage";
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
            path: "Courses",
            element: <CoursesPage />,
          },
    ],
  },
]);

export default router;
