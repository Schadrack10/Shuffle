import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Box from "@mui/material/Box";
import Footer from '../components/Footer'
import JanuarySection from '../components/january-month/JanuarySection';
import WordPress from '../components/wordPress-section/wordpress_section';
import Tailwind_css_section from '../components/tailwind-css/Tailwind_css_section';
import DevelopTime from '../components/DevelopTime';

export default function Home() {
  return (
    <Box className="cover" sx={{...styles.container}}>
    <Banner/>
    <Tailwind_css_section/>
    <JanuarySection/>
    <WordPress />
    <DevelopTime/>
    <Footer/>
    </Box>
  )
}


const styles = {
  container:{
     padding:"20px 150px"
  }
}