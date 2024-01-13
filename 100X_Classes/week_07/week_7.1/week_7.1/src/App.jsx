/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// if putting curly braces use return keyword
const DashboardLazy = lazy(() => {
  return import("./components/Dashboard");
});

const LandingPageLazy = lazy(() => import("./components/LandingPage"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>....loading</p>}>
        <Routes>
          <Route path="/" element={<LandingPageLazy />} />
          <Route path="/dashboard" element={<DashboardLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

function TopRouteBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/dashboard")}> Dashboard</button>
      <button onClick={() => navigate("/")}>LANDING PAGE </button>
    </div>
  );
}
