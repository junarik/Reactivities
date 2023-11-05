import { Card, CardMedia, CardContent, Typography, Divider, CardActions, ButtonGroup, Button } from "@mui/material";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useEffect } from "react";



export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !activity) return <LoadingComponent /> // removing ts errors 

    return (
        <Card sx={{ borderRadius: "10px", mb: 4 }}>
            <CardMedia
                sx={{ height: 540 }}
                image={`/assets/categoryImages/${activity.category}.jpg`}
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
                    <Button component={Link} to={`/manage/${activity.id}`}>Edit</Button>
                    <Button component={Link} to="/activities">
                        Cancel
                    </Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
})