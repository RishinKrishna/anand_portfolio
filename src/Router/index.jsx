import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, CareerGoals } from "../components";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/careergoals" Component={CareerGoals} />
    </Routes>
  );
};

export default MainRoute;
