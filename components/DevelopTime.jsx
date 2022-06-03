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
      <Box sx={{ ...styles.aside, left: "0" }}>
        <Box sx={{ ...styles.iconContainer, justifyContent: "flex-end" }}>
          <Box data-aos="flip-left" sx={{ ...styles.icon, margin: "0 40px" }}>
            <img src="react-img.png" alt="" />
          </Box>
        </Box>
        <Box data-aos="flip-left" sx={{ ...styles.iconContainer, justifyContent: "center" }}>
          <Box sx={{ ...styles.icon, background: "rgb(66 189 202)" }}>
            <img src="tail-img.png" alt="" />
          </Box>
        </Box>
        <Box data-aos="flip-left" sx={{ ...styles.iconContainer, justifyContent: "flex-end" }}>
          <Box sx={{ ...styles.icon, margin: "0 30px", background: "#dd569a" }}>
            <img src="sass-img.png" alt="" />
          </Box>
        </Box>
      </Box>

      <Box sx={styles.content}>
        <Typography
          align="center"
          variant="h1"
          fontSize="70px"
          sx={styles.mainHeading}
          // className="text-copy"
        >
          start saving your <br /> development time
          <img style={styles.clockImg} src="clock.png" alt="clock" />
        </Typography>
        <Typography
          align="center"
          variant="h6"
          fontSize="20px"
          sx={styles.mainBody}
        >
          work Smarter not Harder <br />
          join <span style={{ color: "blue" }}>6000+</span> developers who use
          our editor
        </Typography>
        <Button data-aos="flip-left" variant="contained" sx={styles.btn}>
          Try Demo
        </Button>

      </Box>

      <Box sx={{ ...styles.aside, right: "0", backgroundSize: "cover" }}>
        <Box sx={{ ...styles.iconContainer, justifyContent: "flex-start" }}>
          <Box
          data-aos="flip-left"
            sx={{
              ...styles.icon,
              margin: "0 40px",
              background: "#3592fa",
            }}
          >
            <img src="mui-image.png" alt="" />
          </Box>
        </Box>
        <Box data-aos="flip-left" sx={{ ...styles.iconContainer, justifyContent: "center" }}>
          <Box sx={{ ...styles.icon, background: "#AE00FC" }}>
            <img src="boot-img.png" alt="" />
          </Box>
        </Box>
        <Box data-aos="flip-left" sx={{ ...styles.iconContainer, justifyContent: "flex-start" }}>
          <Box sx={{ ...styles.icon, background: "#00DDB1" }}>
            <img src="bulma-img.png" alt="" />
          </Box>
        </Box>
          
      </Box>
    </Box>
  );
};

export default DevelopTime;

const styles = {
  container: {
    minHeight: "400px",
    // border: "1px solid red",
    display: "flex",
    marginBottom: 10,
    marginTop: 10,
  },
  mainHeading: {
    fontWeight: "bold",
    textTransform: "capitalize",
    letterSpacing: "0px",
  },
  btn: {
    borderRadius: "35px",
    width: "200px",
    height: "60px",
    "&:hover": {
      background: "lightgreen",
    },
  },
  mainBody: {
    color: "#999",
    m: 2,
  },
  content: {
    height: "500px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex:'1'
  },
  clockImg: {
    height: "50px",
    margin: "0 20px",
  },

  aside: {
    width: "400px",
    height: "500px",
    position: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-reapeat",
    backgroundPosition: "center",
    background: "url('aside-bg.png')",
    backgroundBlendMode: "lighten",
  },
  iconContainer: {
    height: "calc(500px / 3)",
    display: "flex",
    alignItems: "center",
    padding: "0 35px",
  },
  icon: {
    // border:'1px solid red',
    height: "100px",
    width: "100px",
    borderRadius: "10px",
    background: `#4fd3fc`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
