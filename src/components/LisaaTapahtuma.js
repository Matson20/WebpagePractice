import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box"
import TextField  from "@mui/material/TextField";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AttachmentIcon from '@mui/icons-material/Attachment';
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';

import axios from 'axios';

const styles = {  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '60vh',
    marginTop: '5vh',
    marginBottom: '5vh'
   
  };

function LisaaTapahtuma() {

    const [tapahtuma, setValues] = useState({
        otsikko: '',
        paikka: '',
        paiva: new Date(),
        kuva: '',
        hinta: '',
        kuvaus: ''
    });

    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setValues({
        ...tapahtuma,
        [e.target.name]: e.target.value
    });

    setViesti('');
    };

    // Käytän otsikkon muutamiseen isoksi. Ehkä jää pois?
    const muutaSuurella = (e) => {
        setValues({
          ...tapahtuma,
          [e.target.name]: e.target.value.toUpperCase()
        });
          
        setViesti('');
      };
    
      const muutaKuva = (e) => {
        setValues({
          ...tapahtuma,
          kuva: e.target.files[0]
        });
    
        setViesti('');
      }

      const lisaaTapahtuma = async (e) => {

        let paiva = tapahtuma.paiva.getFullYear() + '-' + (tapahtuma.paiva.getMonth()+1) + '-' + tapahtuma.paiva.getDate();
    
        const formData = new FormData();
        formData.append('otsikko', tapahtuma.otsikko);
        formData.append('paikka', tapahtuma.paikka);
        formData.append('paiva', paiva);
        formData.append('kuva', tapahtuma.kuva);
        formData.append('hinta', tapahtuma.hinta);
        formData.append('kuvaus', tapahtuma.kuvaus);
        
        try {
          await axios.post('http://localhost:8080/tapahtuma/add', formData);
          setValues({
            otsikko: '',
            paikka: '',
            paiva: new Date(),
            kuva: [],
            hinta: '',
            kuvaus: ''
          });
          setViesti('Lisättiin');
    
        } catch (error) {
          setValues({
            otsikko: '',
            paikka: '',
            paiva: new Date(),
            kuva: [],
            hinta: '',
            kuvaus: ''
          });
          setViesti('Tietojen lisäys ei onnistunut');
        }
      } // lisaaTapahtuma

      const tyhjenna = (e) => {
     setValues({
            otsikko: '',
            paikka: '',
            paiva: new Date(),
            kuva: [],
            hinta: '',
            kuvaus: ''
        });    
        setViesti('');
      } // tyhjenna

    let kuvaNimi = '';
      if (tapahtuma.kuva !== null) {
        kuvaNimi = tapahtuma.kuva.name;
      }

    const muutaPaiva = (e) => {
        setValues({
          ...tapahtuma,
          paiva: e
         });
    
        setViesti('');
      };


    return (
        <Paper sx={{padding:'10px', marginTop:'10px', marginLeft:'70px', marginRight:'70px',   backgroundColor:'#5c2e22' }}>
        <Box component='form' sx={ {'& .MuiTextField-root': { marginBottom: 2 }, padding: 2,   backgroundColor:'#968278' } }>

            <TextField label='Otsikko' name='otsikko' value={ tapahtuma.otsikko } 
            onChange={ (e) => muuta(e) } required fullWidth />

            <TextField label='Paikka' name='paikka' value={ tapahtuma.paikka } 
            onChange={ (e) => muuta(e) } required fullWidth />

            {/* Tapahtuman päivän valitseminen */}
            <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils} adapterLocale={fiLocale}>
                <DatePicker label='Päivä'
                value={tapahtuma.paiva}
                onChange={ (e) => muutaPaiva(e) }
                renderInput={ (params) => <TextField {...params} required fullWidth /> }
                />
            </LocalizationProvider>

            <TextField label='Hinta' name='hinta' value={ tapahtuma.hinta } 
            onChange={ (e) => muuta(e) } required fullWidth />

            <TextField label='Kuvaus' name='kuvaus' value={ tapahtuma.kuvaus } 
            onChange={ (e) => muuta(e) } multiline rows='4' required fullWidth />

            {/* Kuvan lisääminen */}
            <Input accept='image/*' name='kuva' id='kuva' type='file'
              onChange={ (e) => muutaKuva(e) } sx={{display: 'none'}} />

            <InputLabel htmlFor='kuva'>
                <Typography sx={{ display:'inline'}}>Kuva</Typography>
                <Button component='span'>
                    <AttachmentIcon />
                </Button>
                <Typography sx={{ display:'inline'}}>{ kuvaNimi }</Typography>
            </InputLabel>

            <Box sx={ {textAlign: 'center'} }>
                <Button onClick={ (e) => lisaaTapahtuma(e) } variant='contained' sx={ {marginRight:3} } startIcon={ <CreateIcon /> }>Lisää</Button>
                <Button onClick={ (e) => tyhjenna(e) } variant='contained'  color='secondary' startIcon={ <ClearIcon /> }>Tyhjennä</Button>
            </Box>
        </Box>

        <Typography sx={ {marginTop: 3} }>{ viesti }</Typography>
        </Paper>
    )
}

export default LisaaTapahtuma;