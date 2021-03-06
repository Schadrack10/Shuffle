import React ,{ useEffect} from "react";
import { Box , Typography } from "@mui/material";
import Aos from './../../node_modules/aos';
// import './../../node_modules/aos/dist';
// import "aos/dist/aos.css";
import ImgMediaCard from "./Card";

const JanuarySection = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <Box sx={styles.container}>
        <Box sx={{height:"100px", display:"flex", justifyContent:"center", alignItems:'center', margin:"20px 0", display:"flex"}}>
              <Typography align="center" variant="h1" fontSize={42} sx={{fontWeight:"bolder", letterSpacing:"2px"}}>
                      january was a 
              </Typography>
              <Box sx={styles.headerBox}>
                  {/* <img src="busy.png" alt="busy" width="200px" /> */}
              <Typography color="#fff" align="center" variant="h1" fontSize={40} sx={{fontWeight:"bold", position:"absolute", zIndex:"1", }}>
                     Busy Month
              </Typography>
              </Box>
        </Box>
      <Box sx={styles.cardContainer}>
        <ImgMediaCard dataAos="fade-right"  source="card-img.jpg" textHead="Plain UI for Bulma, Bootsrap & Tailwind" textbody="" />
        <ImgMediaCard dataAos="zoom-in" source="card-img2.png" textHead="CSS Filters  for Bulma, Bootsrap & Tailwind" textbody="" />
        <ImgMediaCard dataAos="fade-left" source="card-img3.png" textHead="Fixes Improving Back end Structures" textbody="" />
      </Box>
    </Box>
  );
};

export default JanuarySection;

const styles = {
  container: {
    minHeight: "500px",
    padding:"20px 0 50px 0"
    //   border:'1px solid #888',

  },
  cardContainer:{
        minHeight:"auto",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 20px",
  },
  headerBox:{
      width:"250px",
      height:"60px",
    //   border:'1px solid blue',
      margin:"0 10px",
    //   background:"rgba(116, 0, 255, 1)",
    background:"url('busy.png')",
    backgroundSize:"cover",
      color:"white",
      left:"-415px",
      top:"1063px",
      color:"white",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
     
  }
};
