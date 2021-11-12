import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography, Box } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,


}

const verticalCenter = {
    height: '450px',
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid red'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{my:3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam quod mollitia voluptate natus. Fuga cumque repellat ipsum libero ducimus!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appiontment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;