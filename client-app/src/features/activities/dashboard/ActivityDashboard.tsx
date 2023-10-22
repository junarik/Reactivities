import { Box, Container, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { selectedActivity, editMode, activitiesByDate } = activityStore;

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
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
                <Grid item xs={5} sx={{ maxWidth: "428px" }}>
                    {selectedActivity && !editMode &&
                        <ActivityDetails />
                    }
                    {editMode &&
                        <ActivityForm />
                    }
                </Grid>
            </Grid>
        </Container>
    )
})