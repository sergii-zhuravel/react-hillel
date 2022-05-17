import { Link } from "react-router-dom";
// import { Button } from "@mui/material";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to={"/users"}>Users</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
