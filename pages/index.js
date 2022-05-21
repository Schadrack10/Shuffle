import Head from 'next/head'
import Image from 'next/image'
import Banner from './components/Banner'
import Box from "@mui/material/Box";


export default function Home() {
  return (
    <Box className="cover" sx={{...styles.container}}>
   <Banner/>
    
    
    
    </Box>
  )
}


const styles = {
  container:{
     padding:"20px 90px"
  }
}