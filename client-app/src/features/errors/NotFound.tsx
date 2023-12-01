import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <>
        <Typography>Opps, something went wrong!</Typography>
        <Button component={NavLink} to='/activities'>
            Return to activities page
        </Button>
        </>
    )
}