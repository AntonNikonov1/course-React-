import React from "react";
import { RouteProps } from "react-router-dom";
import { LandingPage } from "../components/LandingPage";

export const useUnauthorizedPages = () => {
  const unauthorizedPages: RouteProps[] = [
    {
      path: "/",
      element: <LandingPage />,
    },
  ];

  return { unauthorizedPages };
};
