import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Activity } from "../../../app/models/Activity";
import InfoIcon from "@mui/icons-material/Info";
import { deepPurple } from "@mui/material/colors";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { AirlineSeatLegroomExtra } from "@mui/icons-material";
interface Props {
  activity: Activity;
}

export default function ActivityDetailedInfo({ activity }: Props) {
  return (
    <Paper elevation={4}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"8px"}
        sx={{ ml: "2px", p: "12px" }}
      >
        <InfoIcon
          sx={{ color: deepPurple[500], width: "28px", height: "28px" }}
        />
        <Typography>
          <strong>{`${activity.title}`}</strong>
        </Typography>
      </Stack>
      <Divider sx={{ width: "100%" }} />
      <Stack
        direction={"row"}
        gap={"8px"}
        alignItems={"center"}
        sx={{ ml: "2px", p: "12px" }}
      >
        <InsertInvitationIcon
          sx={{ color: deepPurple[500], width: "28px", height: "28px" }}
        />
        <Typography>
          <strong>{`${activity.date}`}</strong>
        </Typography>
      </Stack>
      <Divider sx={{ width: "100%" }} />
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"8px"}
        sx={{ ml: "2px", p: "12px" }}
      >
        <FmdGoodIcon
          sx={{ color: deepPurple[500], width: "28px", height: "28px" }}
        />
        <Typography>
          <strong>{`${activity.city}`}</strong>
        </Typography>
      </Stack>
    </Paper>
  );
}
