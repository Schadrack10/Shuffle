import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CameraIcon from "@mui/icons-material/Camera";

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Grid container>
        <Grid sx={{ ...styles.gridItem }} item md={4} sm={6} xs={12}>
          <Box sx={{ display: "flex" }}>
            <img src="logo.png" alt="logo" style={{ marginRight: " 20px" }} />
            <Typography
              sx={{ fontWeight: "bolder", marginTop: "10px" }}
              fontSize={25}
              variant="h1"
            >
              Shuffle
            </Typography>
          </Box>
          <Box sx={{ ...styles.linkContainer, padding: "0" }}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              An online editor for busy developers
            </Typography>
          </Box>
          <Box sx={styles.iconContainer}>
            <FacebookIcon sx={{ ...styles.socialIcon }} />
            <TwitterIcon sx={{ ...styles.socialIcon }} />
            <GitHubIcon sx={{ ...styles.socialIcon }} />
            <InstagramIcon sx={{ ...styles.socialIcon }} />
            <CameraIcon sx={{ ...styles.socialIcon }} />
          </Box>
        </Grid>
        <Grid sx={{ ...styles.gridItem }} item md={2.5} sm={6} xs={12}>
          <Box sx={{ height: "29px" }}>
            <Typography
              sx={{ fontWeight: "600", marginTop: "10px" }}
              fontSize={20}
              variant="h1"
            >
              Products
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Visual editor Tailwind
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Visual editor Bootstrap
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Visual editor bulma
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Visual editor for Material-UI
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Extension for visual Studio code
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ ...styles.gridItem }} item md={2} sm={6} xs={12}>
          <Box sx={{ height: "29px" }}>
            <Typography
              sx={{ fontWeight: "600", marginTop: "10px" }}
              fontSize={20}
              variant="h1"
            >
              Company
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              About
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Blog
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Support
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Become an affiliate
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Start your editor
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ ...styles.gridItem }} item md={1.5} sm={6} xs={12}>
          <Box sx={{ height: "29px" }}>
            <Typography
              sx={{ fontWeight: "600", marginTop: "10px" }}
              fontSize={20}
              variant="h1"
            >
              Usage
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Explore
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Indivuals
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Freelance
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Teams
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ ...styles.gridItem }} item md={2} sm={6} xs={12}>
          <Box sx={{ height: "29px" }}>
            <Typography
              sx={{ fontWeight: "600", marginTop: "10px" }}
              fontSize={20}
              variant="h1"
            >
              Legal
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Indivuals
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Terms of Service
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Cookie Policy
            </Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography
              sx={{ ...styles.footerLink }}
              color="#c4c4c4"
              variant="p"
            >
              Lincenses
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.underBox}>
        <Box sx={styles.icon}>C</Box>
        <Box>
          <Typography fontSize="14px" variant="p">
            copyright <span style={{ fontSize: "13px" }}>2020</span>. All Rights
            Reserved by <b>shuffle</b>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = {
  container: {
    padding: "30px 20px 0px 20px",
    minHeight: "",
  },
  gridItem: {
    // border: "1px solid red",
    minHeight: "300px",
  },
  footerLink: {
    fontWeight: "500",
    color: "#999",
    // color:"#05004D",
    fontSize: "14px",
    cursor: "pointer",
  },
  linkContainer: {
    minHeight: "50px",
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",

    // padding: "0 20px",
  },
  underBox: {
    minHeight: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    borderRadius: "100%",
    height: "18px",
    width: "18px",
    border: "1px solid #777",
    margin: "0 7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: "bold",
    border: "2px double ",
  },
  iconContainer: {
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",
    height: "50px",
    // justifyContent:'space-between'
  },
  socialIcon: {
    color: "lightgrey",
    width: "30px",
    marginRight: "20px",
  },
};
