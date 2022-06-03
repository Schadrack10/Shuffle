import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box , Typography } from "@mui/material";


export default function ImgMediaCard({source, textHead, dataAos}) {


  return (
    <Card data-aos={dataAos} sx={{ maxWidth: 340, minHeight:"400px", borderRadius:"20px" }}>

       <Box sx={{...styles.head, background:`url(${source})`,backgroundSize:'cover'}}
       >
            {/* <img src={source} alt="source" style={styles.img} /> */}
       </Box>

      <CardContent>
        <Typography gutterBottom fontSize={22} variant="h1" sx={{fontWeight:"bolder"}} component="div">
               {textHead}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           a widespread group of squamate framework, with over 6,000
          design, ranging across all continents except components
        </Typography>
      </CardContent>
      <CardActions>
  
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}

const styles = {
   head:{
       height:"240px",

   },

   backgroundSize:'cover'
}