import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useStore } from '../stores/store';


function ResponsiveAppBar() {
    const {activityStore} = useStore();

    return (
        <AppBar position="fixed" className="NavBar">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src="/assets/logo.png" alt="logo" style={{ height: '3em' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            ml: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Reactivities
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Activities
                        </Button>
                        <Button variant="contained" onClick={() => activityStore.openForm()}
                            sx={{ ml: 2, my: 2, color: 'white', display: 'block' }}
                        >
                            Create Activity
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;