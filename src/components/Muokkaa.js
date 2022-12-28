import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';

import { useParams } from 'react-router';

function Muokkaa () {
    let { id, otsikko, paikka, paiva, kuvaus, hinta } = useParams();

    let paivaTemp = paiva.split('.') // Pilkotaan palasiksi päivämäärän tekemiseksi

// tilamuuttujat ja niiden muuttamiskutsu
  const [tapahtuma, setValues] = useState({
      id: id,
      otsikko: otsikko,
      paikka: paikka,
      paiva: new Date( paivaTemp[2], paivaTemp[1]-1, paivaTemp[0]), // Muodostetaan päivä
      kuva: [],
      hinta: hinta,
      kuvaus: kuvaus
      
  });

  const [viesti, setViesti] = useState('');

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...tapahtuma,
       [e.target.name]: e.target.value
     });
   };

   const muutaSuurella = (e) => {
      setValues({
        ...tapahtuma,
        [e.target.name]: e.target.value
      });
    };

   const muutaKuva = (e) => {
     setValues({
      ...tapahtuma,
      kuva: e.target.files[0]
     });
   }

   const muutaPaiva = date => {
     setValues({
      ...tapahtuma,
      paiva: date
     });
   };

// Funktio painikkeen painallukselle
  const lisaaTapahtuma = (e) => {
    e.preventDefault();

    setViesti('Muutosta ei tulla tekemään backiin seuraavassa osassa');
  }

  const tyhjenna = (e) => {

    setValues({
        otsikko: '',
        paikka: '',
        paiva: new Date(),
        kuva: [],
        hinta: '',
        kuvaus: ''
    });
  }

  let kuvaNimi = '';
  if (tapahtuma.kuva !== null) {
    kuvaNimi = matka.kuva.name;
  }

  return (
  <Paper sx={ {padding:'10px', margin:'10px' } }>
    <Box
        component='form'
        sx={ {'& .MuiTextField-root': { marginBottom: 2 }} }>
      <TextField label='Otsikko' name='otsikko' value={ tapahtuma.otsikko }
      onChange={ muutaSuurella } margin='normal' required fullWidth
      autoFocus/>

    <TextField label='Paikka' name='paikka' value={ tapahtuma.paikka }
      onChange={ muuta } margin='normal' required fullWidth />

      { /*
      <TextField label='Päivä' name='paiva' value={ matka.paiva }
      onChange={ muuta }  margin='normal' required fullWidth />
      */ }
      <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils} adapterLocale={fiLocale}>
        <DatePicker
          inputFormat='dd.MM.yyyy'
          value={matka.paiva}
          onChange={ (e) => muutaPaiva(e) }
          renderInput={ (params) => <TextField {...params} required fullWidth /> }
        />
      </LocalizationProvider>

         <TextField label='Hinta' name='hinta' value={ tapahtuma.hinta } 
            onChange={ (e) => muuta(e) } required fullWidth />

        <TextField label='Kuvaus' name='kuvaus' value={ tapahtuma.kuvaus } 
            onChange={ (e) => muuta(e) } multiline rows='4' required fullWidth />

      <Input accept='image/*' name='kuva' id='kuva' type='file'
        onChange={ muutaKuva } sx={ {display: 'none'} } />

    <InputLabel htmlFor='kuva'>
        <Typography sx={{ display:'inline'}}>Kuva</Typography>
        <Button component='span'>
            <AttachmentIcon />
        </Button>
        <Typography sx={{ display:'inline'}}>{ kuvaNimi }</Typography>
      </InputLabel>

      <Box sx={ {textAlign: 'center'} }>
        <Button onClick={lisaaTapahtuma} variant='contained' color='primary' sx={ {marginRight:3} }><CreateIcon />Muokkaa</Button>
        <Button onClick={tyhjenna} variant='contained' color='secondary'><ClearIcon />Tyhjennä</Button>
      </Box>

    </Box>

    <Typography sx={ {marginTop: 3} }>{ viesti }</Typography>
  </Paper>
  );
}

export default Muokkaa;
