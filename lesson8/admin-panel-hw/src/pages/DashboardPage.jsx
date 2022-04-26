import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
// import { Button } from "@mui/material";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to={"/albums"}>Albums</Link> | <Link to={"/users"}>Users</Link>
        <Button variant="outlined" disabled>
          Hello World
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;
