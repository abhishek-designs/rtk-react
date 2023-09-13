import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const PublicRoute = () => {
  const { isLoggedin } = useAppSelector((state) => state.user);

  return isLoggedin ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
