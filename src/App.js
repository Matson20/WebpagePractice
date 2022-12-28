import React from "react";
import Box from '@mui/material/Box'
import Etusivu from "./components/Etusivu";
import TabMUI from './components/TabMUI';
import MenuMUI from "./components/MenuMUI";
import { Typography } from "@mui/material";
import TapahtumatListaus from "./components/TapahtumatListaus";
import Kuvagalleria from "./components/Kuvagalleria";
//import Laitteistolista from "./components/Laitteistolista";
import LisaaTapahtuma from "./components/LisaaTapahtuma";
import HaeTapahtumat from "./components/HaeTapahtumat";
import Kontakti from "./components/Kontakti";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logo from "./design/Logo_BAARI.png";
import EtsiTapahtuma from "./components/EtsiTapahtuma";
import ListaaYksi from "./components/ListaaYksi";
import KaikkiTapahtumat from "./components/KaikkiTapahtumat";

const theme = createTheme({
  palette: {
    primary: {
      // kultataustat
      light: '#efbd34',
      main: '#efbd34', 
      dark: '#A37902',
      contrastText: '#FFFFFF'},

      // värit taustoihin
    secondary: {
      light: '#5c2e22',
      main: '#151209', 
      dark:'#361b14',
      contrastText: '#FFFFFF'},
    // teksti valkoinen, musta jos tausta valkoinen    
    text: {primary:'#151209', secondary: '#000000', contrastText: '#FFFFFF'},    
    action: {hover: '#A37902' },
   // tausta musta    
    background: {default: '#000000'}
  },
  typography : {
      fontFamily: "'Roboto', cursive",
  }
});



function App() {
  return (
    //ROUTTAUS ALOITETTU. NYT PÄÄSIVU ON TAB. TEHTÄVÄNÄ MIETTIÄ MITEN MENU JA TAB YHDISTYY.
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Box>
     
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <TabMUI /> }>
                  <Route index element={ <Etusivu/> } />
                  <Route path='keikat' element={ <HaeTapahtumat /> } />
                  <Route path='kuvagalleria' element={ <Kuvagalleria /> } />
                  
                  <Route path='lisaaTapahtuma' element={ <LisaaTapahtuma /> } />
                  <Route path='etsiTapahtuma' element={ <EtsiTapahtuma /> } /> 
                  <Route path='poistaTapahtuma' element={ <KaikkiTapahtumat /> } />
                  <Route path='*' element={ <Typography>Virheellinen reititys</Typography> } />            
              </Route>

              {/* MITEN TEHDÄÄN KAKSI TOIMIVAA NAVIGOINTIA ROUTTAUKSEEN?
              <Route path='contact' element={ <Kontakti /> } />
              <Route path='lisaaTapahtuma' element={ <EtsiTapahtuma tapahtuma={tapahtuma} /> } /> 
              <Route path='/menu' element={ <MenuMUI/> }>
                  <Route index element={ <Etusivu/> } />
                  <Route path='contact' element={ <Laitteistolista /> } />
                  <Route path='laitteistolista' element={ <Laitteistolista /> } />
                  <Route path='lisaaTapahtuma' element={ <LisaaTapahtuma /> } />
                  <Route path='*' element={ <Typography>Virheellinen reititys</Typography> } />            
              </Route>
              */}

          </Routes>
        </BrowserRouter>
        </Box> 
     </ThemeProvider>

  );
}

export default App;
