import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const navLinkStyles = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  color: "inherit",
  "&:hover": {
    textDecoration: "none",
  },
};

function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" className="NavBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/" style={navLinkStyles}>
            <img src="/assets/logo.png" alt="logo" style={{ height: "3em" }} />

            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none !important",
              }}
            >
              Reactivities
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/activities" style={navLinkStyles}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Activities
              </Button>
            </NavLink>

            <NavLink to="/createActivity" style={navLinkStyles}>
              <Button
                variant="contained"
                sx={{ ml: 2, my: 2, color: "white", display: "block" }}
              >
                Create Activity
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
