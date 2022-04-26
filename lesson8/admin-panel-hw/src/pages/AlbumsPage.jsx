import { Link, Outlet } from "react-router-dom";

function AlbumsPage() {
  return (
    <div>
      <span>{"<"}</span> <Link to={"/"}>Dashboard</Link>
      <Outlet />
    </div>
  );
}

export default AlbumsPage;
