import AuthLayout from "../layout/AuthLayout";
import { Auth } from "../pages/auth";
import { PageNotFound } from "../pages/not-found";
import GuardRoute from "./GuardRoute";

export const authRoute = {
  home: {
    path: "/auth",
    element: (
      <AuthLayout>
        <GuardRoute>
          <Auth />
        </GuardRoute>
      </AuthLayout>
    ),
  },

  other: {
    path: "*",
    element: (
      <AuthLayout>
        <GuardRoute>
          <PageNotFound />
        </GuardRoute>
      </AuthLayout>
    ),
  },
};
