import { Fragment } from "react";
import { Activity } from "../../../app/models/Activity";
import { Avatar, Box, Button, Card, Divider, Typography } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

interface Props {
  activity: Activity;
}

export function ActivityListItem({ activity }: Props) {
  return (
    <Fragment>
      <Card square elevation={4} sx={{ mb: 2, borderRadius: 1 }}>
        <Box
          className="listItemBox"
          sx={{ mb: 1, display: "flex", flexDirection: "row" }}
        >
          <Avatar
            sx={{ bgcolor: deepPurple[500], width: 64, height: 64, mx: 1 }}
          ></Avatar>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              {activity.title}
            </Typography>
            <Typography>Hosted By Bob</Typography>
          </Box>
        </Box>
        <Divider sx={{ width: "100%", backgroundColor: "darkgrey" }} />
        <Box
          className="listItemBox"
          sx={{
            mb: 1,
            ml: 1,
            display: "flex",
            flexDirection: "row",
            gap: "1px",
          }}
        >
          <AccessTimeFilledIcon sx={{ color: grey }} />
          <Typography sx={{ mt: "1px" }}>{activity.date}</Typography>
          <LocationOnIcon sx={{ color: grey }} />
          <Typography sx={{ mt: "1px" }}>{activity.city}</Typography>
        </Box>
        <Divider sx={{ width: "100%", backgroundColor: "darkgrey" }} />
        <Box className="listItemBox" sx={{ backgroundColor: "lightgray" }}>
          <Typography sx={{ ml: 1 }}>Attendees go here</Typography>
        </Box>
        <Divider sx={{ width: "100%", backgroundColor: "darkgrey" }} />
        <Box
          className="listItemBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography sx={{ ml: 1 }}>{activity.description}</Typography>
          <Button
            variant="contained"
            className="listItemButton"
            //disableElevation
            sx={{
              background: "linear-gradient(135deg, #6A11CB,  #333)",
              color: "white",
              borderRadius: "2px",
              "&:hover": {
                background: "linear-gradient(135deg, #6A11CB,  #9575cd)",
              },
            }}
            component={Link}
            to={`/activities/${activity.id}`}
          >
            View
          </Button>
        </Box>
      </Card>
    </Fragment>
  );
}
