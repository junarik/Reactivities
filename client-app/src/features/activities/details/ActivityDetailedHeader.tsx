import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Activity } from "../../../app/models/Activity";
import { observer } from "mobx-react-lite";
import { lime } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const activityImageStyle = {
  filter: "brightness(30%)",
  width: "100%",
  height: "100%",
};

const activityImageTextStyle = {
  position: "absolute",
  bottom: "8%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
  zIndex: 2,
};

const theme = createTheme({
  palette: {
    primary: lime,
  },
});

interface Props {
  activity: Activity;
}

export default observer(function ActivityDetailedHeader({ activity }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4}>
        <Box sx={{ position: "relative" }}>
          <img
            style={activityImageStyle}
            title={`${activity.category} category image`}
            src={`/assets/categoryImages/${activity.category}.jpg`}
          />
          <Box sx={activityImageTextStyle}>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography>{activity.date}</Typography>
            <Typography>
              Hosted by <strong>Bob</strong>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mx: "12px",
            mt: "10px",
            mb: "12px",
            display: "flex",
            justifyContent: "space-between",
            gap: "4px",
          }}
        >
          <Stack direction={"row"} gap={"4px"}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: "linear-gradient(135deg, #6A11CB,  #333)",
                color: "white",
                borderRadius: "2px",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(135deg, #6A11CB,  #9575cd)",
                },
              }}
            >
              Join Activity
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                background: "gray",
                color: "white",
                borderRadius: "2px",
                textTransform: "none",
                "&:hover": {
                  background: "darkgray",
                },
              }}
            >
              Cancel attendance
            </Button>
          </Stack>

          <Button
            disableElevation
            variant="contained"
            color="primary"
            sx={{
              color: "black",
              textTransform: "none",
              fontFamily: "Arial",
            }}
          >
            Manage Event
          </Button>
        </Box>
      </Paper>
    </ThemeProvider>
  );
});
