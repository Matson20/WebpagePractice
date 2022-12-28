import React, { useState} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';

import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListIcon from '@mui/icons-material/List';

import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';


// KESKEN tästä tulee menu joka avaa lisävalikot nille sivuille jotka ei ole Tab komponentissa
function MenuMUI () {

    const [anchorNavi, setOpenNavi] = useState(null);
    const menuOpen = (e) => {
        setOpenNavi(e.currentTarget);
    };

    const menuClose = () => {
        setOpenNavi(null);
    };

    const menu =
    <Menu anchorEl={anchorNavi} open={Boolean(anchorNavi)}
      onClose={menuClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>

        <MenuItem onClick={menuClose} component={ Link } to='kontakti'>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary='Contact' />
        </MenuItem>

        <MenuItem onClick={menuClose} component={ Link } to='laitteistolista'>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary='Laitteisto' />
        </MenuItem>

        <MenuItem onClick={menuClose} component={ Link } to='lisaaTapahtuma'>
            <ListItemIcon><CloudQueueIcon /></ListItemIcon>
            <ListItemText primary='Lisää tapahtuma' />
        </MenuItem>
    </Menu>;


    return (
        <Box>         
                <IconButton onClick={ menuOpen } color='inherit'>
                    <MenuIcon />
                </IconButton>
                { menu }        
            <Outlet />  
        </Box>
    )
}

export default MenuMUI;