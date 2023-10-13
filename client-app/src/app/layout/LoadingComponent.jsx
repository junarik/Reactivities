import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Box } from "@mui/material";

const styleInCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  gap: 2,
};

export default function LoadingComponent({ content = "Loading..." }) {
  return (
    <Box sx={styleInCenter}>
      <CircularProgress color="inherit" />
      <Typography>{content}</Typography>
    </Box>
  );
}
