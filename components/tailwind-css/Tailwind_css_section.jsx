import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Image from "next/image";

const Tailwind_css_section = () => {
  return (
    <Box sx={{ ...styles.container }}>
      <Box sx={{ ...styles.header }}>
        <Box sx={styles.logo}></Box>
        <Typography
          align="center"
          sx={{ fontWeight: "bolder", margin: "10px 0" }}
          fontSize={70}
          color="#fff"
          variant="h1"
        >
          Largest UI library <br /> for tailwind css
        </Typography>

        <Typography
          align="center"
          sx={{ fontWeight: "200", margin: "7px 0" }}
          fontSize={20}
          color="#999"
          variant="h1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
          error amet
        </Typography>
        <Typography
          align="center"
          sx={{ fontWeight: "200" }}
          fontSize={20}
          color="#999"
          variant="h1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam
          error amet
        </Typography>
      </Box>
      <Box sx={{ ...styles.btnContainer }}>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            bulma
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Bootstrap
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            layout
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            division
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            container
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Applications
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Content
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Hero sections
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Pricing
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Tables
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Logo Cloud
          </Typography>
        </Box>
        <Box sx={{ ...styles.btn }}>
          <Typography variant="h6" color="#fff">
            Container
          </Typography>
        </Box>
      </Box>
      <Box sx={{...styles.imgGrid,marginTop:'40px'}}>
        <Grid container>
          <Grid item md={6} sx={styles.centerGrid}>
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
                margin: "0 10px",
              }}
            />
          </Grid>
          <Grid item md={6} sx={styles.centerGrid}>
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
                margin: "0 10px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.imgGrid}>
        <Grid container>
          <Grid item md={6} sx={styles.centerGrid}>
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
                margin: "0 10px",
              }}
            />
          </Grid>
          <Grid item md={6} sx={styles.centerGrid}>
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            <img
              src="https://cdn.dribbble.com/users/408665/screenshots/17502693/media/9d63fa6cc5f254e5b708c59e4b1db8f2.png"
              alt="img"
              width="250px"
              height="200px"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
                margin: "0 10px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ...styles.header }}>
        <Typography
          align="center"
          sx={{ fontWeight: "bolder", margin: "10px 0" }}
          fontSize={40}
          color="#fff"
          variant="h1"
        >
          And {"we'll"} give you even more
        </Typography>
        <Typography
          align="center"
          sx={{ fontWeight: "200" }}
          fontSize={20}
          color="#999"
          variant="h1"
        >
          All of thi ipsum dolor sit amet consectetur adipisicing elit. Quod
          aperiam error amet <br />
          All of thi ipsum dolor sit amet consectetur adipisicing elit. Quod
          aperiam error amet
        </Typography>

        <Box sx={{ ...styles.btn, background: "#69c65f", margin: "15px 0" }}>
          <Typography color="#fff" variant="h6">
            Read more
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Tailwind_css_section;

const styles = {
  container: {
    backgroundColor: "#06051C",
    minHeight: "1200px",
    borderRadius: "30px",
    margin: "100px 0",
    color: "white",
    //   padding: '40px 0'
  },

  header: {
    // border:'1px solid blue',
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 0",
    justifyContent: "space-between",
  },
  logo: {
    height: "60px",
    width: "60px",
    borderRadius: "10px",
    // border: "1px solid red",
    background: 'url("tail-logo.png")',
    backgroundSize: "cover",
  },
  btnContainer: {
    //    border:'1px solid red',
    minHeight: "100px",
    display: "flex",
    alignItems: "center",

    overflowY: "auto",
  },
  btn: {
    minWidth: "150px",
    height: "50px",
    // border:'1px solid red',
    margin: "0 10px",
    borderRadius: "30px",
    background: "#1B5348",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      background: "#69c65f",
    },
  },
  imgGrid: {
    // border: "1px solid red",
    minHeight: "250px",
    padding: "0 0px",
    // display:'flex',
    // alignItems:'center',
    // justifyContent:'center'
  },
  centerGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

  },
};
