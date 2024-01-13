import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleGoBack}>go to login page</button>
      Dashboard
    </div>
  );
};

export default Dashboard;
