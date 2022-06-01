import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const DevelopTime = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={styles.container}>
        
        <Box sx={{...styles.aside, left:"0"}}>
  
        </Box>
         
        <Box sx={styles.content}>
      <Typography align="center" variant="h1" fontSize="70px" sx={styles.mainHeading}>
        start saving your <br /> development time
      <img style={styles.clockImg} src="clock.png" alt="clock" />
      </Typography>
      <Typography align="center" variant="h6" fontSize="20px" sx={styles.mainBody}>
       work Smarter not Harder <br />
       join <span style={{color:"blue"}}>6000+</span> developers who use our editor
      </Typography>
      <Button data-aos="flip-left" variant="contained" sx={styles.btn}>Try Demo</Button>
        </Box>

        <Box sx={{...styles.aside, right:"0",   backgroundSize:"cover",}}>

        </Box>
        
    </Box>
  );
};

export default DevelopTime;

const styles = {
  container: {
    minHeight: "400px",
    // border: "1px solid red",
    display:"flex",
    marginBottom:10,
    marginTop:10
   
  },
  mainHeading: {
    fontWeight: "bold",
    textTransform:"capitalize",
    letterSpacing:"0px"
  },
  btn: {
      borderRadius:"35px",
      width:"200px",
      height:"60px",
    background: "",
    "&:hover": {
      background: "",
    },
  },
  mainBody:{
      color:'#999',
      m:2
  },
  content:{
      height:"500px",
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column"
  },
  clockImg:{
      height:"50px",
      margin:'0 20px'
  },

  aside:{
 
    width:"400px",
    height:"500px",
    position:"absolute",
    backgroundSize:"cover",
    backgroundRepeat:"no-reapeat" ,
    backgroundPosition:"center",
    background:"url('aside-bg.png')",
    backgroundBlendMode: "lighten"




  }
};
