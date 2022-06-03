import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'next/image'


const Tailwind_css_section = () => {
  return (
    <div style={styles.container}>
        tailwind_css_section
        <Grid
            display={"flex"}
            align={"center"}
            justifyContent={"center"}    
        >
            <Box style={styles.small_container}>
            <Typography color="white" >
                    insert image here
            </Typography>
            </Box>
        </Grid>

        <Grid>
            <Box textAlign={"center"}>
                <Typography color="white" fontSize={"35px"}>
                    Largest UI library <br/>
                    for Tailwind CSS
                </Typography>
            </Box>
        </Grid>

        <Grid>
            <Box textAlign={"center"}>
                <Typography color="grey" fontSize={""}>
                    The largest set of UI components will allow you to find the right design for any <br/>
                    purpose. Its components come together seamlessly to give you a solid design.
                </Typography>
            </Box>
        </Grid>

        <Grid
            display={"flex"}
            align={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
            padding={"5px"}
        >
            <Box
                style={styles.title__container} 
                textAlign={"center"}
                sx={{'&:hover':{backgroundColor:'red'}}}
                >
                <Typography color="white" fontSize={"23px"}>
                Hero Section
                </Typography>
            </Box>
            <Box
                style={styles.title__container} 
                textAlign={"center"}>
                <Typography color="white" fontSize={"23px"}>
                Pricing
                </Typography>
            </Box>
            <Box
                style={styles.title__container} 
                textAlign={"center"}>
                <Typography color="white" fontSize={"23px"}>
                Tables
                </Typography>
            </Box>
            <Box
                style={styles.title__container} 
                textAlign={"center"}>
                <Typography color="white" fontSize={"23px"}>
                Logo cloud
                </Typography>
            </Box>
            <Box
                style={styles.title__container} 
                textAlign={"center"}>
                <Typography color="white" fontSize={"23px"}>
                Content
                </Typography>
            </Box>
            <Box
                style={styles.title__container} 
                textAlign={"center"}>
                <Typography color="white" fontSize={"23px"}>
                Applications
                </Typography>
            </Box>
            <Box
                style={styles.title__container} 
                textAlign={"center"}>
                <Typography color="white" fontSize={"23px"}>
                Contact
                </Typography>
            </Box>
            
        </Grid>

        <Grid>
            <Box textAlign={"center"}>
                <Typography color="white" fontSize={"32px"}>
                    And we'll give you even more.
                </Typography>
            </Box>
        </Grid>

        <Grid>
            <Box textAlign={"center"}>
                <Typography color="grey" fontSize={""}>
                    All of this is just the first part of the kit -for building a landing page. We still have the <br/>
                    E-commerce and Dashboard kit in the pipeline. You'll get them as an upgrade to your<br/>
                    subscription, at no extra cost.
                </Typography>
            </Box>
        </Grid>

        <Grid
            display={"flex"}
            align={"center"}
            justifyContent={"center"}
            overflow={"hidden"}
            padding={"5px"}
        >
            <Box
                style={styles.title__container} 
                sx={{'&:hover':{backgroundColor:'red'}}}
                >
                <Typography color="white" fontSize={""}>
                Start creating with Flex
                </Typography>
            </Box>
        </Grid>
    </div>
  )
}

export default Tailwind_css_section

const styles = {
    container: { 
      backgroundColor:'#2a3342',
      height: 'object-fit', 
      borderRadius: '30px',
      margin: '50px 0',
      color: 'white',
      padding: '40px'
    },
    small_container:{
        backgroundColor:'red',
        height: "80px",
        width:"80px",
        display: "flex",
        alignItems: "center",
        justifyItems: "center"
    },
    title__container:{
        width: "fit-content",
        backgroundColor: "#69c65f",
        color: 'white',
        padding: "0.8rem",
        margin: "1rem",
        borderRadius: "50vw"
    },
    '&:hover':{
        title__container:{
            backgroundColor:'red'
        }
    }

}