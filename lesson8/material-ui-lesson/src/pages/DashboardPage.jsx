import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to={"/albums"}>Albums</Link> | <Link to={"/users"}>Users</Link>
      </div>
    </div>
  );
}

export default DashboardPage;
