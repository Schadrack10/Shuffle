import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <Box  sx={{ ...styles.container }}>
      {/* navbar */}
      <Grid  sx={styles.navbar} container>
        <Grid sx={styles.gridItem} item md={3} sm={4} xs={12}>
          <Box sx={{ marginRight: " 20px" }}>
            <img
              src="logo.png"
              width="38px"
              height="37px"
              alt="logo"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography fontSize="30px" sx={{ fontWeight: "bold" }} variant="h3">
            Shuffle
          </Typography>
        </Grid>
        <Grid
          sx={{
            ...styles.gridItem,
            padding: "0 10px",
            justifyContent: "space-around",
          }}
          item
          md={6}
          sm={4}
          xs={12}
        >
          <Typography sx={styles.navText} variant="h6">
            Product
          </Typography>
          <Typography sx={styles.navText} variant="h6">
            Case Studies
          </Typography>
          <Typography sx={styles.navText} variant="h6">
            Pricing
          </Typography>
          <Typography sx={styles.navText} variant="h6">
            About
          </Typography>
        </Grid>
        <Grid
          sx={{ ...styles.gridItem, justifyContent: "flex-end" }}
          item
          md={3}
          sm={4}
          xs={12}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ ...styles.navText }} fontSize={18} variant="h6">
              Log In
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "40px",
                ml: 2,
                height: "50px",
                background: "#00162B",
                "&:hover": { background: "#00162B" },
              }}
            >
              Try Demo
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ height: "calc(100% - 84px)" }}>
        <Grid sx={{ ...styles.gridhalf }} item md={6}>
          <Box sx={{ height: "20%",...styles.itemCenter, alignItems:'flex-end' }}>
            <Button variant="contained" sx={{...styles.frameworkBtn}}>
            <img src="icon.png" alt="" width={18} style={{margin:'0 4px'}} />

            <Typography sx={{fontWeight:'bold'}} fontSize={12} >Tailwind CSS</Typography>
            </Button>
            <Button variant="contained" sx={{...styles.frameworkBtn}}>
               <img src="bootstrap icon.png" alt="" width={16} style={{margin:'0 4px'}} />
            <Typography sx={{fontWeight:'bold'}} fontSize={12} >Bootstrap soon</Typography>
            </Button>
            <Button href="https://bulma.io/" variant="contained" sx={{...styles.frameworkBtn}}>
            <img src="bulma.png" alt="" width={16} style={{margin:'0 4px'}} />

            <Typography sx={{fontWeight:'bold'}} fontSize={12} >Bulma soon</Typography>
            </Button>
          </Box>
          <Box
            sx={{
              height: "50%",
              ...styles.itemCenter,
            }}
          >
            <Typography variant="h1" fontSize={95} sx={{ fontWeight: "bold" }}>
              Flex your skills with FlexUI
            </Typography>
          </Box>
          <Box sx={{ height: "30%", gap: 5 }}>
            <Typography
              variant="h3"
              fontSize={20}
              // color="#070155"
              sx={{ fontWeight: "500", lineHeight: "1.5" }}
            >
              We've added the largest ui library, new tools, and we can tell you
              how we'll integrate WordPress
            </Typography>
            <Box sx={{ ...styles.btnContainer, ...styles.itemCenter }}>
              <Button
                sx={{ ...styles.btnBanner, mr: 2 }}
                variant="contained"
                color="primary"
              >
                <Typography color="#fff" sx={{fontWeight:'bolder'}} variant="p">TRY FLEX UI</Typography>
              </Button>
              <Button
                sx={{
                  ...styles.btnBanner,
                  background: "white",
                  fontWeight: "bolder",
                  "&:hover": { background: "white", color: "white" },
                }}
                variant="contained"
              >
                <Typography variant="p">Read More</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid sx={{ ...styles.gridhalf }} item md={6}>
             <Box sx={{...styles.bannerImg}}>
               <img src="c2.jpg" alt="img" width={600} height={500} style={{objectFit:'cover'}}  />
             </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    background: "",
  },
  navbar: {
    p: 2,
    height: "auto",
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "",
    // border: "1px solid red",
  },
  gridItem: {
    // border: "1px solid red",
    display: "flex",
  },
  navText: {
    fontSize: "18px",
    fontWeight: "900",
    cursor: "pointer",
  },

  gridhalf: {
    // border: "1px solid red",
    padding: "16px",
  },
  itemCenter: {
    display: "flex",
    alignItems: "center",
  },
  btnContainer: {
    // border:"1px solid ",
    height: "70%",
    // justifyContent:'space-around'
  },
  btnBanner: {
    borderRadius: "80px",
    height: "60px",
    width: "200px",
    background: "#6CCCFF",
    '&:hover':{
      background:'#17AAF9'
    }
  },
  frameworkBtn:{
       height:"30px",
       minWidth:"150px",
       mr:2,
       background:'white',
       '&:hover':{
         background:'white'
       }
  },
  bannerImg:{
    height:'100%',
    with:'100%',
    display: "flex",
    alignItems: "center",
  }
};
