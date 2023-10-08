import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [selectedActivity, setSelectedActivity] = useState(undefined);
  const [activities, setActivities] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  function handleSelectActivity(id) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrUpdate(activity) {
    activity.id
      ? setActivities([
          ...activities.filter((x) => x.id !== activity.id),
          activity,
        ])
      : setActivities([...activities, { ...activity, id: uuid() }]);

    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDelete(activity) {
    setActivities([...activities.filter((x) => x.id !== activity.id)]);
    setEditMode(false);
    setSelectedActivity(undefined);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <ActivityDashboard
        activities={activities}
        selectedActivity={selectedActivity}
        handleSelectActivity={handleSelectActivity}
        handleCancelSelectActivity={handleCancelSelectActivity}
        editMode={editMode}
        closeForm={handleFormClose}
        openForm={handleFormOpen}
        createOrUpdate={handleCreateOrUpdate}
        deleteActivity={handleDelete}
      />
    </>
  );
}

export default App;
