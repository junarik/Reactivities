import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4">
        <PeopleAltIcon />
        Reactivities
      </Typography>
      <List>
        {activities.map((activity: any) => (
          <ListItem>
            <ListItemText key={activity.id} primary={activity.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
