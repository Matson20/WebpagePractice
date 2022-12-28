import React, { useState} from "react";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

import ListaaYksi from "./ListaaYksi";

const styles = {
    height: 'auto',
    width: '60vh',
    marginTop: '5vh',
    marginBottom: '5vh',
    backgroundColor:'#5c2e22'
  };


function EtsiTapahtuma(props) {

    const [tapahtuma, setTapahtuma] = useState('');
    const [haetaan, setHaetaan] = useState(false);
    const [paiva, setPaiva] = useState('');
    const [virhe, setVirhe] = useState('Haetaan');

    const muuta = (e) => {
        setPaiva(e.target.value);
        setHaetaan(false);
    };

    const hae = () => {
        setHaetaan(true);
    };

    let haku ="";

    const etsiTapahtuma = async () => {
        setHaetaan(true);
        try {
          // await-> odota ennekuin haku tehty. "get" operaatio määrätty jo matkaServerissä.
          const response = await axios.get('http://localhost:8080/tapahtuma/one/' + paiva);
          setPaiva(response.data);
          console.log(response.data)
          setVirhe('');
        } catch (error) {
          setPaiva([]);
          setVirhe('Tietojen haku ei onnistunut');
        }
      }

    if (haetaan) {

        const etsiTapahtuma = async () => {
            try {
              // await-> odota ennekuin haku tehty. "get" operaatio määrätty jo matkaServerissä.
              const response = await axios.get('http://localhost:8080/tapahtuma/one/:id', paiva);
              setPaiva(response.data);
              console.log(response.data)
              setVirhe('');
            } catch (error) {
              setPaiva([]);
              setVirhe('Tietojen haku ei onnistunut');
            }
          }


        let result = props.tapahtuma.filter(tapahtuma => tapahtuma.paiva === paiva);

        if (paiva.length > 0) {
            haku = 
                    <Typography>
                        <ListaaYksi tapahtuma={ paiva } />
                    </Typography>
                    
             
        } else {
            haku = "Kyseiselle ajalle ei tapahtumia."
        }
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Paper style={styles} >
                <Box sx={{ my: 3, mx: 2 }} >
                    <Grid  container derection='column' sx={ { paddingRight: '10vh', paddingLeft:'10vh' }}>  
                    <TextField label='Päivä' variant='outlined' value={ paiva } 
                         onChange={ (e) => muuta(e)} />
                    <Button variant='contained' color='primary' startIcon={ <SearchIcon/> } sx={ {marginLeft:2} }
                    onClick={ ()=> hae() }> HAE </Button>
   
                    </Grid>
                </Box> 

                <Divider variant="middle" color='#968278' />

                { haku }

            </Paper>
        </Box>
    )
}

export default EtsiTapahtuma;