import { AppBar, Button, Toolbar, Link, Box, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Header() {
  const pages = ["Home", "Users", "Albums"];
  const navigate = useNavigate();
  function onMenuNavClick(to) {
    navigate(to);
  }
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Link to="dashboard" component={RouterLink} color="inherit">
          Home
        </Link>
        <Link to="users" component={RouterLink} color="inherit">
          Users
        </Link>
        <Link to="albums" component={RouterLink} color="inherit">
          Albums
        </Link> */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Admin Panel
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => onMenuNavClick(page.toLocaleLowerCase())}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
