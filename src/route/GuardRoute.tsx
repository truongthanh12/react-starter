import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const user = false;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // If user is logged in, redirect away from the login page
      if (pathname === "/auth") {
        navigate("/");
      }
    } else {
      // If user is not logged in, redirect to the login page
      if (pathname !== "/auth") {
        navigate("/auth");
      }
    }
  }, [user, pathname, navigate]);

  return <>{children}</>;
}
