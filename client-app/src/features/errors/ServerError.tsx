import { Box, Container, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";

export default observer (function ServerError() {
    const {commonStore} = useStore();
    return (
        <Container sx={{ display: "flex", height: "80vh", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h5">The Internal Server Error has occured!</Typography>
                <Typography variant="h5">Error message:
                    <Typography color="error">{commonStore.error?.message}</Typography>
                </Typography>
            </Box>
            <Paper sx={{ p: "12px", borderRadius: "10px" }}>
                <Typography variant="body1" color="teal">Stack Trace</Typography>
                <Typography variant="body2">{commonStore.error?.details}</Typography>
            </Paper>
        </Container>
    )
})