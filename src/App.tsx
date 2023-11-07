import { ReactNode, Suspense } from "react";
import Toaster from "./components/ui/toaster";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userRoute } from "./route/DefaultRoute";
import { authRoute } from "./route/AuthRoute";

/**
 * Renders the main application component.
 * @returns The rendered component.
 */
function App() {
  const createRoutes = (
    routeList: Record<string, { path: string; element: ReactNode }>
  ) => {
    return Object.values(routeList).map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ));
  };

  return (
    <BrowserRouter>
      <Suspense fallback="Loading ...">
        <Routes>
          {createRoutes(userRoute)}
          {createRoutes(authRoute)}
        </Routes>
        <Toaster />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
