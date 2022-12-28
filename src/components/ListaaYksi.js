import React from 'react';
import { Box } from '@mui/system';
import { CardContent, CardHeader, CardMedia, Paper, Typography } from '@mui/material';
import { Grid, Card } from '@mui/material';
import Stack from '@mui/system/Box';
//styles = height: auto

const styles = {  
    height: 'auto',
    width: '60vh',
    marginTop: '5vh',
    marginBottom: '5vh',
    backgroundColor:'#5c2e22'
  };

function ListaaYksi(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Paper style={styles} >
            {
                props.tapahtumat.map(tapahtuma => {
                    return(
                        <Grid item key={ tapahtuma.id } container direction='column' sx={ { paddingRight: '10vh', paddingLeft:'10vh' }}>     
                            <Card sx={ { width: '40vh', height: 'auto', marginTop: '3vh', marginBottom: '3vh', backgroundColor:'#968278' } } >

                                <CardHeader title={ tapahtuma.otsikko } />
                                <CardContent>
                                <CardMedia component='img' sx={ {height:100, width:200 } } 
                                    image={ 'http://localhost:8080/download/' + tapahtuma.kuva } alt={ tapahtuma.otsikko } />
                                    <Typography>{ tapahtuma.paikka }</Typography>
                                    <Typography>{ tapahtuma.paiva }</Typography>
                                    <Typography>{ tapahtuma.kuvaus }</Typography>
                                    <Typography>{ tapahtuma.hinta }</Typography>
                                </CardContent>
                            </Card>                            
                        </Grid>
                    )
                })
            }
            </Paper>    
        </Box>
       
    )
}

export default ListaaYksi;