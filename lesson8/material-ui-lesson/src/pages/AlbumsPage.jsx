import { Breadcrumbs } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function AlbumsPage() {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to={"/"}>Dashboard</Link>
      </Breadcrumbs>
      <Outlet />
    </div>
  );
}

export default AlbumsPage;
