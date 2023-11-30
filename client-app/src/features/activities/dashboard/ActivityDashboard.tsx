import { Box, Container, Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Calendar from "react-calendar";

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
          <Paper sx={{mb: 1}}>
            <MenuList>
              <MenuItem divider={true}>
                <ListItemIcon>
                  <FilterAltIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>Filter</ListItemText>
              </MenuItem>
              <MenuItem divider={true}>
                <ListItemText>All activities</ListItemText>
              </MenuItem>
              <MenuItem divider={true}>
                <ListItemText>I'm going</ListItemText>
              </MenuItem>
              <MenuItem divider={true}>
                <ListItemText>I'm hosting</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <Calendar/>
        </Grid>
      </Grid>
      
    </Container>
  );
});
