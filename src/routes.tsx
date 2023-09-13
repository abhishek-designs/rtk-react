import { RouteObject, Navigate } from "react-router-dom";
import { Dashboard, NotFound, Signin, Signup } from "./pages";
import { AppLayout, DashboardLayout } from "./layouts";
import PublicRoute from "./customRoutes/PublicRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/auth",
        element: <Navigate to="/auth/signup" />,
      },
      {
        path: "*",
        element: <Navigate to="404" />,
      },
    ],
  },
  {
    path: "auth",
    element: <PublicRoute />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "404",
    element: <NotFound />,
  },
];

export default routes;
