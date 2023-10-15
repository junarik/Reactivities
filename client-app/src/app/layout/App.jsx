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
  const [submitting, setSubmitting] = useState(false);

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
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        const updatedActivities = [
          ...activities.filter((x) => x.id !== activity.id),
          activity,
        ];
        setActivities(updatedActivities);
        setSubmitting(false);
        setEditMode(false);
        setSelectedActivity(activity); //*+
      });
    } else {
      const newActivity = { ...activity, id: uuid() };
      agent.Activities.create(newActivity).then(() => {
        setActivities([...activities, newActivity]);
        setSubmitting(false);
        setSelectedActivity(newActivity); // *-
        setEditMode(false);
      });
    }

    //setSubmitting(false);
    //setEditMode(false);
  }

  function handleDelete(activity) {
    setSubmitting(true);
    agent.Activities.delete(activity.id).then(() => {
      setActivities([...activities.filter((x) => x.id !== activity.id)]);
      setSubmitting(false);
      setEditMode(false);
      setSelectedActivity(undefined);
    });
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
        submitting={submitting}
      />
    </>
  );
}

export default App;
