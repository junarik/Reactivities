import { Fragment, SyntheticEvent, useState } from "react";
import { Activity } from "../../../app/models/Activity";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

export function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Fragment>
      <Paper square elevation={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Typography className="ActivityTag" variant="body1">
              {activity.title}
            </Typography>
            <Typography className="ActivityTag" variant="body1">
              {activity.date}
            </Typography>
            <Typography className="ActivityTag" variant="body1">
              {activity.description}
            </Typography>
            <Typography className="ActivityTag" variant="body1">
              {activity.city}
            </Typography>
            <Typography
              variant="button"
              sx={{
                border: "1px solid grey",
                borderRadius: "6px",
                m: "2px",
                p: "4px",
                alignSelf: "start",
              }}
            >
              {activity.category}
            </Typography>
          </Box>
          <Box sx={{ alignSelf: "end", display: "flex", gap: 1 }}>
            <LoadingButton
              name={activity.id}
              className="viewListButton"
              onClick={(e) => handleActivityDelete(e, activity.id)}
              variant="contained"
              disableElevation
              color="error"
              sx={{ borderRadius: "4px" }}
              loading={loading && target === activity.id}
            >
              Delete
            </LoadingButton>
            <Button
              component={Link}
              to={`/activities/${activity.id}`}
              className="viewListButton"
              variant="contained"
              disableElevation
              sx={{ borderRadius: "4px" }}
            >
              View
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
}
