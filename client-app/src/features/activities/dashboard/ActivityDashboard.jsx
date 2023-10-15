import { Container, Paper, Typography } from "@mui/material";
import { Grid, Box, Divider } from "@mui/material";
import React from "react";
import ActivityList from "./ActivityItemView";
import ActivityItemMore from "./ActivityItemMore";
import { red } from "@mui/material/colors";
import ActivityForm from "../form/ActivityForm";

export default function ActivityDashboard({
  activities,
  selectedActivity,
  handleSelectActivity,
  handleCancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrUpdate,
  deleteActivity,
  submitting,
}) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
              {activities.map((activity, index) => (
                <Grid item xs={12} key={activity.id}>
                  <ActivityList
                    activity={activity}
                    handleSelectActivity={handleSelectActivity}
                    closeForm={closeForm}
                    deleteActivity={deleteActivity}
                    isNotLast={index !== activities.length - 1}
                    submitting={submitting}
                  />
                </Grid>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={5} sx={{ maxWidth: "428px" }}>
          {selectedActivity && !editMode && (
            <ActivityItemMore
              activity={selectedActivity}
              handleCancelSelectActivity={handleCancelSelectActivity}
              openForm={openForm}
            />
          )}
          {editMode && (
            <ActivityForm
              closeForm={closeForm}
              activity={selectedActivity}
              createOrUpdate={createOrUpdate}
              submitting={submitting}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
