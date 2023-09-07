import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, CareerGoals } from "../components";

const MainRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/careergoals",
      element: <CareerGoals />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRoute;
