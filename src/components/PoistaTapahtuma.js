import React, { useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';


import { Link } from 'react-router-dom';

import axios from 'axios';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close';
import HaeTapahtumat from './HaeTapahtumat';

const styles = {  
  height: 'auto',
  width: '60vh',
  marginTop: '5vh',
  marginBottom: '5vh',
  backgroundColor:'#5c2e22'
};

function PoistaTapahtuma (props) {

  const [viesti, setViesti] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const poista = async (id) => {
    try {
      await axios.get('http://localhost:8080/tapahtuma/delete/' + id)
      setViesti('Poistettiin');
    } catch (error) {
      setViesti('Poisto ei onnistunut');
    }
    setOpen(true);
  }

  let dialog =   
    <Dialog onClick={handleClose} open={open}>
      <DialogContent>
        <DialogContentText color='secondary'>{viesti}
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        </DialogContentText>
      </DialogContent>
    </Dialog>;

  if (viesti === 'Poistettiin') {
    return ( 
      <div>
        { dialog }
        <HaeTapahtumat />
      </div> 
    )
  }
  
  if (props.tapahtumat.length > 0) {
    return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      
    { dialog }

      <Grid container spacing={4} sx={{ marginTop:1}}>
        { props.tapahtumat.map(tapahtuma => {
          // Kannasta päivä tulee muodossa vvv-kk-pp
          // muutetaan se muotoon pp.kk.vvvv
            let paiva = tapahtuma.paiva.split('-');
            let uusiPaiva = paiva[2] + '.' + paiva[1] + '.' + paiva[0]; 

            return (
              <Grid item key={ tapahtuma.id } >
                <Card sx={ { width: '25vh', height: 'auto', marginTop: '3vh', marginBottom: '3vh', backgroundColor:'#968278' } }>
                <CardHeader
                  title={ tapahtuma.otsikko.toUpperCase() }
                  subheader={ uusiPaiva } />

                <CardContent>
                  { tapahtuma.kuva ?
                    <CardMedia sx={ {height: 100, width: 200} }
                      image={'http://localhost:8080/download/' + tapahtuma.kuva}
                      title={ tapahtuma.otsikko } />
                    : 
                    <Typography>Ei kuvaa</Typography>
                  }

                    <Typography>{ tapahtuma.paikka }</Typography>
                    <Typography>{ tapahtuma.kuvaus }</Typography>
                    <Typography>{ tapahtuma.hinta }</Typography>
                </CardContent>
  
                <CardActions>
                
                    <IconButton onClick={() => poista(tapahtuma.id)}><DeleteIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      }
      </Grid>
      </Box>
    )
  }

  return ( <Typography>Yhtään matkaa ei ole</Typography> );
}

export default PoistaTapahtuma;
