import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>404 NotFound</h1>
      <div>
        The page was not found. Please go to<Link to={"/"}>Dashboard</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
