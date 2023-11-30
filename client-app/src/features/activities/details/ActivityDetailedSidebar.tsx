import { Avatar, Box, Chip, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function ActivityDetailedSidebar() {
  return <>
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
        <Typography variant="h5">2 people going</Typography>
      </Box>
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', mb:1 }}>
            <Stack direction="row" gap={1}>
              <Avatar src="/assets/user.png" alt="user-avatar" sx={{ pt: 1 }} />
              <Stack direction="column">
                <Typography variant="subtitle1">
                  Tom
                </Typography>
                <Typography variant="body2" color="orange">
                  Following
                </Typography>
              </Stack>
            </Stack>
            <Chip label="host" variant="outlined"/>
          </Stack>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar src="/assets/user.png" alt="user-avatar" sx={{ pt: 1 }} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Tom
              </Typography>
              <Typography variant="body2" color="orange">
                Following
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </>;
}
