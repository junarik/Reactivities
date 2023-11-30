import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Calendar from 'react-calendar';

export default function ActivityFilters()
{
    return (
        <>
            <Paper sx={{mb: 1, mt: "34px"}}>
            <MenuList disablePadding={true}>
              <MenuItem divider={true}>
                <ListItemIcon>
                  <FilterAltIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>Filter</ListItemText>
              </MenuItem>
              <MenuItem divider={true}>
                <ListItemText>All activities</ListItemText>
              </MenuItem>
              <MenuItem divider={true}>
                <ListItemText>I'm going</ListItemText>
              </MenuItem>
              <MenuItem divider={true}>
                <ListItemText>I'm hosting</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <Calendar/>
        </>
    )
}