import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { flexbox } from "@mui/system";
import Paper from '@mui/material/Paper';
import HaeYksi from "./HaeYksi";


const styles = {
    height: 'auto',
    width: '60vh',
    marginTop: '5vh',
    marginBottom: '5vh',
    backgroundColor:'#5c2e22'
  };

function Etusivu () {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Paper style={styles} >
                <Box sx={{ my: 3, mx: 2 }} >
                    <Grid  container derection='column' sx={ { paddingRight: '10vh', paddingLeft:'10vh' }}>  
                            <Card sx={ { width: '40vh', height: 'auto', marginTop: '3vh', marginBottom: '3vh', backgroundColor:'#968278' } } >
                                <CardContent>
                                    <Typography>Hei, ja tervetuloa BAARIIN. Ravintolamme on anniskelu ravintola mutta vähintään yhtä tärkeä elementti paikassamme on live-musiikki. 
                                        BAARI on mahdollisuus nauttia musiikista siihen sopivassa ympäristössä, 
                                        joka antaa esitykselle edellytykset onnistua yli odotusten. Tervetuloa!
                                    </Typography>
                                </CardContent>
                            </Card>   
                    </Grid>
                </Box> 

                <Divider variant="middle" color='#968278' />

                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid  container derection='column' sx={ { paddingRight: '10vh', paddingLeft:'10vh' }}>
                    <Card sx={ { width: '40vh', height: 'auto', marginTop: '3vh', marginBottom: '3vh', backgroundColor:'#bca396' } }>
                                <CardContent>
                                    <HaeYksi />
                                </CardContent>
                            </Card>
                    </Grid>
                </Box>  
            </Paper>
        </Box>
        
    )
}

export default Etusivu;