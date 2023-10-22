import { Card, CardMedia, CardContent, Typography, Divider, CardActions, ButtonGroup, Button } from "@mui/material";
import { useStore } from "../../../app/stores/store";



export default function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

    if (!activity) return; // removing ts errors 

    return (
        <Card sx={{ borderRadius: "10px", mb: 4 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={`./assets/categoryImages/${activity.category}.jpg`}
                title={activity.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {activity.title}
                </Typography>
                <Typography variant="body2">{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <ButtonGroup
                    variant="outlined"
                    disableElevation
                    aria-label="outlined button group"
                    size="medium"
                    fullWidth
                >
                    <Button onClick={() => openForm(activity.id)}>Edit</Button>
                    <Button onClick={cancelSelectedActivity}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}