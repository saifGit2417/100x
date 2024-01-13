/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

const App = () => {
  // try routing like this
  const routeComponents = [
    { path: "/", element: <LandingPage /> },
    { path: "/dashboard", element: <Dashboard /> },
  ];
  return (
    <div>
      <div style={{ background: "yellow", color: "red" }}>
        <h6>this is constant will remsain here even page changes</h6>
      </div>
      <BrowserRouter>
        <TopRouteBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />;
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
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
