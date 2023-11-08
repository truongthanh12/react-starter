import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../state/hooks";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user?.username) {
      // If user is logged in, redirect away from the main page
      if (pathname === "/auth") {
        navigate("/");
      }
    } else {
      // If user is not logged in, redirect to the login page
      if (pathname !== "/auth") {
        navigate("/auth");
      }
    }
  }, [user?.username, pathname, navigate]);

  return <>{children}</>;
}
