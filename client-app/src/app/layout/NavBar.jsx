import {
  AppBar,
  Breadcrumbs,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";

export default function NavBar({ openForm }) {
  return (
    <AppBar position="fixed" className="NavBar">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex", gap: "16px" }}>
          <Diversity1Icon sx={{ mr: 1 }} />
          <Breadcrumbs color="inherit">
            <Typography>Reactivities</Typography>
            <Typography variant="button">Activities</Typography>
            <Button onClick={openForm} variant="outlined" color="inherit">
              Create Activity
            </Button>
          </Breadcrumbs>
          <div className="loginIcon">
            <Box sx={{ display: "flex", gap: "4px" }}>
              <Typography>Login</Typography>
              <LoginIcon />
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
