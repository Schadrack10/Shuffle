import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Aos from "aos";
import "aos/dist/aos.css";

const wordpress_section = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={{ ...styles.container }}>
      <Box sx={{ ...styles.headConatiner }}>
        <Box sx={{ ...styles.twinBlocks,    justifyContent:'flex-end', paddingBottom:'40px' }}>
              <Box sx={{mb:0, display:'flex',}}>
                 <Typography color="#fff" sx={{mr:2}} variant="h6" fontSize={18}>Shuffle</Typography>

                 <Typography color="#fff" variant="h6" fontSize={18}>Wordpress</Typography>
              </Box>



          <Typography
            variant="h1"
            color="#fff"
            sx={{ fontWeight: "bold", mb: 0, mt:1}}
            fontSize={60}
          >
            WordPress <br /> update
          </Typography>
          <Typography
            variant="h6"
            color="#999"
            sx={{ fontWeight: "600" }}
            fontSize={15}
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            minima reiciendis fugit omnis atque beatae nulla sed? Laudantium
            optio saepe minima. Aperiam odio eaque iste mollitia consequuntur
            quod dolore cupiditate?{" "}
          </Typography>
        </Box>
        <Box sx={{ ...styles.twinBlocks, flexDirection: "row" }}>
          {/* two large circles */}
          <Box
            data-aos="flip-left"
         
            sx={{
              ...styles.round,
              height: "200px",
              width: "200px",
              background: "darkblue",
              margin: "70px 100px 0 0px",
              zIndex:'3'
            }}
          >


          </Box>
          <Box
            data-aos="flip-left"
      
            sx={{
              ...styles.round,
              height: "200px",
              width: "200px",
              background: "#09035B",
              margin: "150px 0 0 150px",
              zIndex:'3'
            }}
          >


          </Box>
          {/* tiny circles */}
          <Box
            className="blur round"
           
            sx={{
              ...styles.roundTiny,
              height: "40px",
              width: "40px",
              background: "darkblue",
              margin: "50px 350px 0 0px",
            }}
          ></Box>
          <Box
             className="blur round"
            sx={{
              ...styles.roundTiny,
              height: "50px",
              width: "50px",
              background: "pink",
              margin: "80px 0 0 280px",
            }}
          ></Box>
          <Box
            className="blur round"
            sx={{
              ...styles.roundTiny,
              height: "30px",
              width: "30px",
              background: "yellow",
              margin: "300px 0px 0 400px",
            }}
          ></Box>
          <Box
             className="round blur"
            sx={{
              ...styles.roundTiny,
              height: "30px",
              width: "30px",
              background: "red",
              margin: "40px 0 0 150px",
            }}
          ></Box>
          <Box
             className="round blur"
            sx={{
              ...styles.roundTiny,
              height: "50px",
              width: "50px",
              background: "green",
              margin: "300px 120px 0 0px",
            }}
          ></Box>
          <Box
             className="round blur"
            sx={{
              ...styles.roundTiny,
              height: "70px",
              width: "70px",
              background: "orange",
              margin: "250px 350px 0 0px",
            }}
          ></Box>
          {/* <Box sx={{...styles.round,height:'200px', width:'200px', background:'red', margin:'70px 0 0 100px'}}></Box> */}
        </Box>
      </Box>
      <Box sx={{ ...styles.bubbleContainer }}>
        <Box sx={{ ...styles.bubble }}>
          <Typography variant="h6" fontSize={20} color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolore quaerat modi, ad odit unde nobis nemo minima
            facilis ea, necessitatibus, officia fugiat architecto eum maxime
            enim aspernatur temporibus. Illum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis dolore quaerat modi, ad
            odit unde
          </Typography>
        </Box>
        <Box sx={{ ...styles.bubble }}>
          <Typography variant="h6" fontSize={20} color="#fff">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolore quaerat modi, ad odit unde nobis nemo minima
            facilis ea, necessitatibus, officia fugiat architecto eum maxime
            enim aspernatur temporibus. Illum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis dolore quaerat modi, ad
            odit unde
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ...styles.textBox }}>
        <Typography align="center" fontSize="20px" variant="h6" color="#888">
          When you are ready , you will export it to a file as you do now, just
          uploaded it with wordPress and voila , No need to install Pluggins, no
          software that bloasts
        </Typography>
      </Box>
      <Box sx={{ ...styles.accordionContainer }}>
        <Accordion style={{ ...styles.darkblue_container }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              fontSize={20}
              color={"white"}
              sx={{ fontWeight: "bold" }}
            >
              When will this be available
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"gray"}>
              We are working on integrating our blocks with WP's internal
              editor. So that you can easily add components that you didn't
              include in the first draft.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ ...styles.darkblue_container }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              fontSize={20}
              color={"white"}
              sx={{ fontWeight: "bold" }}
            >
              What's next?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"gray"}>
              We are working on integrating our blocks with WP's internal
              editor. So that you can easily add components that you didn't
              include in the first draft.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ ...styles.darkblue_container }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              fontSize={20}
              color={"white"}
              sx={{ fontWeight: "bold" }}
            >
              What else Beside WordPress
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#999">
              The update for Material-UI has already reached the final straight.
              Artemis UI for
              <br />
              dashboards will arrive along with the editor refresh for the
              latest version of MUI.
              <br />
              <br />
              Over the last three months, our Shuffle Editor has gotten some
              really cool <br />
              improvements. Working on custom components, speed of templates
              building and <br />
              general feeling of lightness is very important to us. Now we are
              collecting feedback <br />
              from you and acting on it. You can expect that we be getting
              better and better <br />
              <br />
              <a
                style={{ marginRight: "8px", cursor: "pointer", color: "blue" }}
              >
                Read more
              </a>
              about the new tools in our year in review.
              <br />
              <br />
              More designs. The next parts of Flex are obviously coming soon,
              but we can show <br />
              you a small preview of our newest library -{" "}
              <a style={{ color: "blue" }}>Nigodo</a>
              . It looks like a million great <br />
              ideas.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default wordpress_section;

const styles = {
  container: {
    // backgroundColor: "#080713",
    background: "#06051C",
    minHeight: "1200px",
    borderRadius: "40px",
    color: "white",
    // padding: '40px',
    margin: "70px 0",
  },

  headConatiner: {
    // border: "1px solid red",
    height: "400px",
    borderRadius: "40px 40px 0 0",
    display: "flex",
    background: 
    "radial-gradient(25.93% 25.93% at 46.84% -9.26%, #958BFF 0%, #080713 100%);",
  },
  twinBlocks: {
    // border: "1px solid blue ",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "",
    padding: "0 70px",
    // borderRadius:'40px 40px 0 0',
  },
  bubbleContainer: {
    // border: "1px solid blue",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bubble: {
    height: "300px",
    width: "500px",
    // background: "blue",
    display: "flex",
    padding: "30px 20px",
    // alignItems:'center',
    borderRadius: "30px",
    background:
      // " linear-gradient(180deg, #8662EE 0%, rgba(107, 0, 220, 0.98) 100%)",
      // 'linear-gradient(358.5deg, #066496 4.14%, #95E5FF 98.97%)'
      " linear-gradient(0.66deg, #146CBD -13.27%, #7AB4FF 59.26%, #BAD6FF 97.16%)",
  },
  textBox: {
    height: "100px",
    // border: "1px solid blue",
    padding: "0 50px",
  },
  accordionContainer: {
    // border: "1px solid blue",
    minHeight: "400px",
    padding: "0 70px 50px 70px",
  },
  darkblue_container: {
    // backgroundColor: "#0D3449",
    background: "rgba(13, 52, 73, 0.4)",
    borderRadius: "10px",
    padding: "15px",
    marginTop: "20px",
  },
  round: {
    borderRadius: "200px",
    position: "absolute",
  },
  roundTiny: {
    borderRadius: "100%",
    position: "absolute",
  },
};
