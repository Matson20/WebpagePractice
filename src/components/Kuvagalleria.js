import React, { useState, useEffect } from 'react';
import ImageList from "@mui/material/ImageList";
import { ImageListItem, Typography } from "@mui/material";
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';


import axios from 'axios';

const styles = {    
    height: 'auto',
    width: '60vh',
    marginTop: '5vh',
    marginBottom: '5vh',
    backgroundColor:'#5c2e22'
  };

// Vielä kesken. Ei toimi halutulla tavalla
function Kuvagalleria() {

    const [tapahtumat, setTapahtumat] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');

    const haeKaikkiKuvat = async () => {
        try {
          const response = await axios.get('http://localhost:8080/tapahtuma/all');
          setTapahtumat(response.data);
          setVirhe('');
        } catch (error) {
          setTapahtumat([]);
          setVirhe('Tietojen haku ei onnistunut');
        }
      }
      
       useEffect( () => {
          haeKaikkiKuvat(); 
       }, [])

    if (virhe.length > 0) {
      return ( <Typography>{ virhe }</Typography> );
    }

    if (tapahtumat.length > 0) {
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper style={styles}>
            <Box sx={{ my: 3, mx: 2, backgroundColor:'#968278' }}>
              <ImageList cols={3} sx={{margin:2}}>
                {tapahtumat.map((item) => (
                <ImageListItem key={item.kuva}
                sx={ { padding: '10px' } }>
                    <img
                        src={'http://localhost:8080/download/' + item.kuva}
                        alt={item.kuva}
                     />
                 </ImageListItem>
                 ))}
             </ImageList>
            </Box>
            </Paper>
        </Box>
      )
    }

    return ( <Typography>Yhtään kuvaa ei ole</Typography> );
}

export default Kuvagalleria;
{/*
<ImageList sx={{ width: 500, height: 650 }} cols={2} rowHeight={164}>
                {
                props.kuvat.map(kuva=> {
                    return (
                        <ImageListItem key={ kuva.id } 
                        sx={ {  margin: '3vh' } }>
                            <img
                            src={kuva.img}
                            alt={kuva.title}/>
                        </ImageListItem>
                    )
                })
                }
            </ImageList>
            */}