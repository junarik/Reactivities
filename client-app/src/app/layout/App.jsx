import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const [selectedActivity, setSelectedActivity] = useState(undefined);
  const [activities, setActivities] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    agent.Activities.getList().then((response) => {
      let activities = [];

      response.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        activities.push(activity);
      });

      setActivities(activities);
      SetLoading(false);
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
    if (activity.id) {
      const updatedActivities = [
        ...activities.filter((x) => x.id !== activity.id),
        activity,
      ];
      setActivities(updatedActivities);
      setSelectedActivity(activity);
    } else {
      const newActivity = { ...activity, id: uuid() };
      setActivities([...activities, newActivity]);
      setSelectedActivity(newActivity);
    }

    setEditMode(false);
  }

  function handleDelete(activity) {
    setActivities([...activities.filter((x) => x.id !== activity.id)]);
    setEditMode(false);
    setSelectedActivity(undefined);
  }

  if (loading) return <LoadingComponent content="Loading app" />;

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
