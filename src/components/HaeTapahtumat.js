import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TapahtumatListaus from './TapahtumatListaus';

import axios from 'axios';
import PoistaTapahtuma from './PoistaTapahtuma';

function HaeTapahtumat () {
 
 const [tapahtumat, setTapahtumat] = useState([]);
 const [virhe, setVirhe] = useState('Haetaan');

 const haeKaikkiTapahtumat = async () => {
  try {
    // await-> odota ennekuin haku tehty. "get" operaatio määrätty jo matkaServerissä.
    const response = await axios.get('http://localhost:8080/tapahtuma/all');
    setTapahtumat(response.data);
    console.log(response.data)
    setVirhe('');
  } catch (error) {
    setTapahtumat([]);
    setVirhe('Tietojen haku ei onnistunut');
  }
}

// UseEffect toiminnallisuus suorittaa haun automaattisesti. Sen takia haeKaikkiMatkat functio useEffectin sisällä.
 useEffect( () => {
      haeKaikkiTapahtumat(); 
 }, [])

 if (virhe.length > 0) {
   return ( <Typography>{ virhe }</Typography> );
 }

 if (tapahtumat.length > 0) {
   return ( <TapahtumatListaus tapahtumat={ tapahtumat } /> );
 }

 return ( <Typography>Yhtään matkaa ei ole</Typography> );
}

export default HaeTapahtumat;
