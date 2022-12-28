import React, {useState} from "react";
import Etusivu from "./Etusivu";
import TapahtumatListaus from './TapahtumatListaus';
import Kuvagalleria from "./Kuvagalleria";
import MenuMUI from './MenuMUI';
import { Link, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

import Logo from "../design/Logo_BAARI.png";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import HomeIcon from '@mui/icons-material/Home';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


function TabMUI () {

    const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }

    return (
      <Box>
      <Typography display="inline"> <img src={Logo} height='100' /></Typography>
      {/*<Typography display="inline"> <MenuMUI /></Typography> */}
        <AppBar position='static' sx={ {height: 'auto'} } >
           <Toolbar>
            <Tabs value={ value } onChange={ handleChange } variant='fullWidth' centered
                sx={ {flexGrow:1, textAlign: 'center'}} textColor='inherit' >
                <Tab  label='Etusivu' icon={<HomeIcon />} component={ Link } to='/'/>
                <Tab  label='Keikat'  icon={<QueueMusicIcon />}  component={ Link } to='keikat' />
                <Tab  label='Valokuvat' icon={<PhotoCameraIcon/> } component={ Link } to='kuvagalleria'/>              
                <Tab  label='Lisää Tapahtuma'  icon={<AddCircleIcon />}  component={ Link } to='lisaaTapahtuma' />
                <Tab  label='Etsi Tapahtuma'  icon={<SearchIcon/>}  component={ Link } to='etsiTapahtuma' />
                <Tab  label='Poista Tapahtuma'  icon={<RemoveCircleIcon />}  component={ Link } to='poistaTapahtuma' />
            </Tabs> 
          </Toolbar>
        </AppBar>
      {/*
       <Tab  label='Kontakti'  icon={<ListIcon />}  component={ Link } to='contact' />
        { value === 0 && <Etusivu /> }
        { value === 1 && <TapahtumatListaus tapahtumat={ props.tapahtumat } />}
        { value === 2 && <Kuvagalleria kuvat={ props.kuvat } />}
    */}
        <Outlet />
      </Box>
    ); // return 
} // function

export default TabMUI;