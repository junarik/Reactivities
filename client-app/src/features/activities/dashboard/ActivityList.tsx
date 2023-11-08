import { Box, Grid, Typography } from "@mui/material";
import { Activity } from "../../../app/models/Activity";
import "./fad.css";
import { observer } from "mobx-react-lite";
import { ActivityListItem } from "./ActivityListItem";
import { useStore } from "../../../app/stores/store";
import { Fragment } from "react";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Typography variant="h2" sx={{ mt: "4px" }}>
            {group}
          </Typography>
          {activities.map((activity: Activity) => (
            <Grid item xs={12} key={activity.id}>
              <ActivityListItem activity={activity} />
            </Grid>
          ))}
        </Fragment>
      ))}
    </>
  );
});
