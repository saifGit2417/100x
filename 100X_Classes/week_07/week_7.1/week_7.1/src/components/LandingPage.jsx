import { NavLink, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavLink to="/dashboard">
        <button>go to dashboard</button>
      </NavLink>
      <br />
      <button
        onClick={() => {
          window.location.href = "/dashboard";
        }}
      >
        go to dashboard uisng location
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        go to dashboard uisng navigate
      </button>
      <br />
      LandingPage
    </div>
  );
};

export default LandingPage;
