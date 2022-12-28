import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

const styles = {
    height: 'auto',
    width: '60vh',
    marginTop: '5vh',
    marginBottom: '5vh',
    backgroundColor:'#5c2e22'
  };

function Kontakti() {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Paper style={styles}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid  container derection='column' sx={ { paddingRight: '10vh', paddingLeft:'10vh' }}>
                    
                        <Card sx={ { width: '40vh', height: 'auto', marginTop: '3vh', marginBottom: '3vh',  backgroundColor:'#968278'  } } >
                            <CardContent>
                                <Typography>Hei, ja tervetuloa BAARIIN. Ravintolamme on anniskelu ravintola mutta vähintään yhtä tärkeä elementti paikassamme on live-musiikki. 
                                    BAARI on mahdollisuus nauttia musiikista siihen sopivassa ympäristössä, 
                                    joka antaa esitykselle edellytykset onnistua yli odotusten. Tervetuloa!
                                </Typography>
                            </CardContent>
                        </Card>                  
                </Grid>
            </Box> 

            <Divider variant="middle" color="#968278" />

            <Box sx={{ my: 3, mx: 2 }}>
                <Grid  container derection='column' sx={ { paddingRight: '10vh', paddingLeft:'10vh' }}>
                    
                        <Card sx={ { width: '40vh', height: 'auto', marginTop: '3vh', marginBottom: '3vh',  backgroundColor:'#968278'  } } >
                            <CardContent>
                                <Typography>Hei, ja tervetuloa BAARIIN. Ravintolamme on anniskelu ravintola mutta vähintään yhtä tärkeä elementti paikassamme on live-musiikki. 
                                    BAARI on mahdollisuus nauttia musiikista siihen sopivassa ympäristössä, 
                                    joka antaa esitykselle edellytykset onnistua yli odotusten. Tervetuloa!
                                </Typography>
                            </CardContent>
                        </Card>                  
                </Grid>
            </Box> 

        </Paper>
    </Box>
    )
}

export default Kontakti;