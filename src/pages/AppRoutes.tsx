import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUnauthorizedPages } from "./hooks/use-unauthorized-pages";

export const AppRoutes = () => {
  const { unauthorizedPages } = useUnauthorizedPages();

  return (
    <BrowserRouter basename="course-React-/">
      <Routes>
        {unauthorizedPages.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
