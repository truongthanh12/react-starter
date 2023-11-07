import DefaultLayout from "../layout/DefaultLayout";
import { Home } from "../pages/home";
import GuardRoute from "./GuardRoute";

export const userRoute = {
  home: {
    path: "/",
    element: (
      <DefaultLayout>
        <GuardRoute>
          <Home />
        </GuardRoute>
      </DefaultLayout>
    ),
  },
};
