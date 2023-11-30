import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Box className="masthead" sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", p:0}}>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
                            <img src="/assets/logo.png" style={{ height: "60px", marginRight: "10px" }} />
                            <Typography variant="h2">Reactivities</Typography>
                        </Box>
                        <Box textAlign="center" my="10px" >
                            <Typography variant="h5">Welcome to Reactivities</Typography>
                            <Button component={Link} to="/activities"
                                variant="outlined" sx={{ color: "White", borderColor: "white", px: "20px", py: "10px", my: 1 }}>
                                Take me to the Activities
                            </Button>
                        </Box>
                    </Box>
            </Box >
        </>

    )
}