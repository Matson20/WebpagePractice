import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ListaaYksi from './ListaaYksi';

import axios from 'axios';

function HaeYksi () {

    const [tapahtuma, setTapahtuma] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');


    const haeYksiTapahtuma = async (id) => {
        try {
            
            // await-> odota ennekuin haku tehty. "get" operaatio määrätty jo matkaServerissä.
            const response = await axios.get('http://localhost:8080/tapahtuma/one/' + id);
            setTapahtuma(response.data);
            console.log(response.data)
            setVirhe('');
        } catch (error) {
            setTapahtuma([]);
            setVirhe('Tietojen haku ei onnistunut');
        }

}

useEffect( () => {
    haeYksiTapahtuma(); 
}, [])

if (virhe.length > 0) {
 return ( <Typography>{ virhe }</Typography> );
}

if (tapahtuma.length > 0) {
 return ( <ListaaYksi tapahtuma={ tapahtuma } /> );
}

return ( <Typography>Yhtään matkaa ei ole</Typography> );
}

export default HaeYksi;