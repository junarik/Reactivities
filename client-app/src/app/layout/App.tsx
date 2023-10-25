import { useEffect } from "react";
import { Container } from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/Store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 10 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default observer(App);
