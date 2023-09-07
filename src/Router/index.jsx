import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, CareerGoals } from "../components";

const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/careergoals" Component={CareerGoals} />
      </Routes>
    </Router>
  );
};

export default MainRoute;
