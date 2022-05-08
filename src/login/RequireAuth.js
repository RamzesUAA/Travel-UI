import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  const roles = auth?.roles?.map((r) => r?.name);
  const ds = roles?.some((r) => allowedRoles?.includes(r));
  console.log(auth);
  console.log(ds);
  return roles?.some((r) => allowedRoles?.includes(r)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
