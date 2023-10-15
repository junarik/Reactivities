import React from "react";
import { Divider, Paper, Typography, Button, Box } from "@mui/material";
import "./fad.css";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

export default function ActivityList({
  activity,
  handleSelectActivity,
  closeForm,
  deleteActivity,
  isNotLast,
  submitting,
}) {
  const [target, setTarget] = useState("");

  function handleActivityDelete(e, activity) {
    setTarget(e.currentTarget.name);
    deleteActivity(activity);
  }

  return (
    <>
      <Paper square elevation={0}>
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
            <Typography className="ActivityTag" variant="span">
              {activity.title}
            </Typography>
            <Typography className="ActivityTag" variant="span">
              {activity.date}
            </Typography>
            <Typography className="ActivityTag" variant="span">
              {activity.description}
            </Typography>
            <Typography className="ActivityTag" variant="span">
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
              variant="contained"
              disableElevation
              color="error"
              sx={{ borderRadius: "4px" }}
              onClick={(e) => handleActivityDelete(e, activity)}
              loading={submitting && target === activity.id}
            >
              Delete
            </LoadingButton>
            <Button
              className="viewListButton"
              onClick={() => {
                handleSelectActivity(activity.id);
                closeForm();
              }}
              variant="contained"
              disableElevation
              sx={{ borderRadius: "4px" }}
            >
              View
            </Button>
          </Box>
        </Box>

        {isNotLast && <Divider variant="middle" />}
      </Paper>
    </>
  );
}
