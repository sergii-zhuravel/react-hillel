import { Box, Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <Typography variant="h1" component="div" gutterBottom>
        Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper>
          <Link to={"/albums"} component={RouterLink}>
            Albums
          </Link>
        </Paper>
        <Paper>
          <Link to={"/users"} component={RouterLink}>
            Users
          </Link>
        </Paper>
      </Box>
    </div>
  );
}

export default DashboardPage;
