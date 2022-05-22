import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Box from "@mui/material/Box";
import Footer from '../components/Footer'
import JanuarySection from '../components/january-month/JanuarySection';


export default function Home() {
  return (
    <Box className="cover" sx={{...styles.container}}>
   <Banner/>
    <JanuarySection/>
    <Footer/>
    
    </Box>
  )
}


const styles = {
  container:{
     padding:"20px 150px"
  }
}