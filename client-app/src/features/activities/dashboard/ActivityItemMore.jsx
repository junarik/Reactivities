import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonGroup,
  Divider,
} from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material/styles";

const cancelTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "#bdbdbd",
          color: "#616161",
          "&:hover": {
            backgroundColor: "#e0e0e0", // Фоновый цвет кнопки при наведении
            borderColor: "#757575", // Цвет границы кнопки при наведении
          },
          "&:active": {
            color: "#f5f5f5",
            backgroundColor: "#9e9e9e", // Фоновый цвет кнопки при активации
            borderColor: "#424242", // Цвет границы кнопки при активации
          },
        },
      },
    },
  },
});
export default function ActivityItemMore({
  activity,
  handleCancelSelectActivity,
  openForm,
}) {
  return (
    <Card sx={{ borderRadius: "10px", mb: 4 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`./public/assets/categoryImages/${activity.category}.jpg`}
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
          <Button onClick={() => openForm(activity.id)}>Edit</Button>
          <Button onClick={handleCancelSelectActivity} theme={cancelTheme}>
            Cancel
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
