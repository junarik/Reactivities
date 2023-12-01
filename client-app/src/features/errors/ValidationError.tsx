import { Box, Typography } from "@mui/material";

interface Props {
    errors: string[];
}

export default function ValidationError({errors}: Props) {
    return (
        <>
            <Box sx={{ my: 1 }}>
                {errors && (
                    <ul>
                        {errors.map((err: string, i) => (
                            <li key={i}>
                                <Typography color="error" variant="body1">{err}</Typography>
                            </li>
                        ))}
                    </ul>
                )}
            </Box>
        </>
    )
}