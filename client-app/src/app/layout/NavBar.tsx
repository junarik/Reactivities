import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '@mui/material';


function ResponsiveAppBar() {
    return (
        <AppBar position="fixed" className="NavBar">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MenuItem component={NavLink} to="/">
                        <img src="/assets/logo.png" alt="logo" style={{ height: '3em' }} />
                        <Typography
                            variant="h6"
                            noWrap
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
                    </MenuItem>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button component={NavLink} to="/activities"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Activities
                        </Button>
                        <Button variant="contained" component={NavLink} to="/createActivity"
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