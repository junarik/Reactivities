import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function ActivityDetailedChat() {
  return (
    <>
      <Paper elevation={4} sx={{ borderRadius: "4px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background: deepPurple[500],
            color: "white",
            borderRadius: "2px",
            mb: 2,
          }}
        >
          <Typography variant="h5">Chat about this event</Typography>
        </Box>
        <Grid container spacing={2} sx={{ pl: 1 }}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Avatar src="/assets/user.png" alt="user-avatar" sx={{ pt: 1 }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Matt
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Today at 5:42PM
                </Typography>
                <Typography variant="body1">How artistic!</Typography>
                <Typography component="p" sx={{ fontSize: '14px', color: 'grey' }}>Reply</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Avatar src="/assets/user.png" alt="user-avatar" sx={{ pt: 1 }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Matt
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Today at 5:42PM
                </Typography>
                <Typography variant="body1">How artistic!</Typography>
                <Typography component="p" sx={{ fontSize: '14px', color: 'grey' }}>Reply</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{p: 1}}>
          <form>
            <TextField
              fullWidth
              variant="outlined"
              label="Add Reply"
              multiline
              rows={4}
              sx={{mb: 1}}
            />
          </form>
          <Button type="submit" variant="contained" color="primary">
            Add Reply
          </Button>
        </Grid>
      </Paper>
    </>

  );
}
