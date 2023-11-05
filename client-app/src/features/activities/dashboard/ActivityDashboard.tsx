import { Box, Container, Grid, Typography } from "@mui/material";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { activitiesByDate } = activityStore;

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
                                backgroundColor: "white",
                                padding: "8px",
                                borderRadius: "10px",
                            }}
                        >
                            {activitiesByDate.map((activity) => (
                                <Grid item xs={12} key={activity.id}>
                                    <ActivityList
                                        activity={activity}
                                    />
                                </Grid>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs ={5}>
                    <Typography variant="h5">Activity filters</Typography>
                </Grid>
            </Grid>
        </Container>
    )
})