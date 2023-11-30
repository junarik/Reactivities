import { Box, Container, Grid} from "@mui/material";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";

import Calendar from "react-calendar";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        justifyItems="center"
        direction="row"
        spacing={4}
      >
        <Grid item xs={7}>
          <Grid container direction="column" justifyContent="flex-end">
            <Box
              justifyContent="flex-end"
              sx={{
                padding: "8px",
                borderRadius: "10px",
              }}
            >
              <ActivityList />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <ActivityFilters />
        </Grid>
      </Grid>
      
    </Container>
  );
});
