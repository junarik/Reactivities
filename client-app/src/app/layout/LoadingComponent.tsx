import { Backdrop, CircularProgress, Typography } from "@mui/material";


export default function LoadingComponent() {
    return (
        <>
            <Typography sx={{ m: 45 }} align="center" variant="h5">Loading...</Typography>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}