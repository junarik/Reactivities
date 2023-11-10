import { Box, Paper, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function ActivityDetailedChat() {
  return (
    <Paper elevation={4} sx={{ borderRadius: "4px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: deepPurple[500],
          color: "white",
          borderRadius: "2px",
        }}
      >
        <Typography variant="h5">Chat about this event</Typography>
      </Box>
      <Box>The Chat</Box>
    </Paper>
  );
}
