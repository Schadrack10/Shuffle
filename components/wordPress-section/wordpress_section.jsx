import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Icon, check } from '@wordpress/icons';
//import {SiTailwindcss} from 'react-icons/si';
//import {SiBootstrap} from 'react-icons/si';
//import {SiBulma} from 'react-icons/si';

/**<ButtonGroup  aria-label="outlined primary button group">
        <div> <Button  style={{margin: '10px', borderRadius: '25px',backgroundColor: '#f1f1f1', borderColor: '#f1f1f1'}}><SiTailwindcss style={{color: 'turquoise', fontSize: '25px'}}/> <p style={{ fontFamily: 'arial', color: 'black', fontSize: '10px'}}>Tailwind css</p></Button></div> 
          
         <div> <Button style={{margin: '10px', borderRadius: '25px',backgroundColor: '#f1f1f1', borderColor: '#f1f1f1'}}><SiBootstrap style= */

const wordpress_section = () => {
  return (
    // <>

    // {/* <Box style={styles.container}>
    // wordpress_section
    // <Grid
    // container
    //   display={"flex"}
    // >
    //   <Box style={styles.bluelight_container}>
    //     <Typography
    //       color="white">
    //       We added a new category to our frameworks list,
    //       from which you will able to choose wordPress.
    //       We will adapt some of our libraries as MVPs to
    //       to gradually expand the list of possible designs
    //     </Typography>
    //   </Box>
    //   <Box style={styles.bluelight_container}>
    //   <Typography
    //     color="white">
    //       After selecting a library, you will get a
    //       predefiined design that you can easily change
    //       in our drag and drop editor. Components
    //       powered by wordpress data will be specially
    //       marked so you know what you can edit later.
    //   </Typography>
    //   </Box>
    // </Grid>

    // <Grid>
    //   <Box style={styles.center_container}>
    //     <Typography
    //       align="centre"
    //       color="gray"
    //       >
    //         When you are ready, you will export it to a file as you do now. Just upload it to WordPress and voila.
    //         No need to install plugins, no software that bloats.
    //     </Typography>
    //   </Box>
    // </Grid>

    // <Box>
    //   <Accordion style={styles.darkblue_container}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     >
    //       <Typography color={"white"}>When will this be available?</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography color={"gray"}>
    //         Early March. We don't want to release anything that might cause problem, so we
    //         are extensive testing our integrations.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion style={styles.darkblue_container}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel2a-content"
    //       id="panel2a-header"
    //     >
    //       <Typography color={"white"}>What's next?</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography color={"gray"}>
    //         We are working on integrating our blocks with WP's internal editor. So that you can
    //         easily add components that you didn't include in the first draft.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion style={styles.darkblue_container}>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel2a-content"
    //       id="panel2a-header"
    //     >
    //       <Typography color={"white"}>What else besides WordPress?</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography color={"gray"}>
    //         The update for Material-UI has already reached the final straight. Artemis UI for<br/>
    //         dashboards will arrive along with the editor refresh for the latest version of MUI.
    //         <br/><br/>
    //         Over the last three months, our Shuffle Editor has gotten some really cool <br/>
    //         improvements. Working on custom components, speed of templates building and <br/>
    //         general feeling of lightness is very important to us. Now we are collecting feedback <br/>
    //         from you and acting on it. You can expect that we be getting better and better <br/>
    //         <br/>
    //         <a><u>Read more</u></a> about the new tools in our year in review.
    //         <br/><br/>
    //         More designs. The next parts of Flex are obviously coming soon, but we can show <br/>
    //         you a small preview of our newest library - <a><u>Nigodo</u></a>. It looks like a million great <br/>
    //         ideas.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    // </Box>

    // </Box> */}
    // </>
    <Box sx={{ ...styles.container }}>
      <Box sx={{ ...styles.headConatiner }}>
        <Box sx={{ ...styles.twinBlocks }}></Box>
        <Box sx={{ ...styles.twinBlocks }}></Box>
      </Box>
      <Box sx={{ ...styles.bubbleContainer }}>
        <Box sx={{ ...styles.bubble }}></Box>
        <Box sx={{ ...styles.bubble }}></Box>
      </Box>
      <Box sx={{ ...styles.textBox }}></Box>
      <Box sx={{ ...styles.accordionContainer }}>

        <Accordion style={{...styles.darkblue_container}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography fontSize={20} color={"white"} sx={{fontWeight:'bold'}}>What's next?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"gray"} >
              We are working on integrating our blocks with WP's internal
              editor. So that you can easily add components that you didn't
              include in the first draft.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{...styles.darkblue_container}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography fontSize={20} color={"white"} sx={{fontWeight:'bold'}}>What's next?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"gray"}>
              We are working on integrating our blocks with WP's internal
              editor. So that you can easily add components that you didn't
              include in the first draft.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{...styles.darkblue_container}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography fontSize={20} color={"white"} sx={{fontWeight:'bold'}}>What's next?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"gray"}>
              We are working on integrating our blocks with WP's internal
              editor. So that you can easily add components that you didn't
              include in the first draft.
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
    backgroundColor: "#080713",
    minHeight: "1200px",
    borderRadius: "40px",
    color: "white",
    // padding: '40px',
    margin: "70px 0",
  },

  headConatiner: {
    border: "1px solid red",
    height: "400px",
    borderRadius: "40px 40px 0 0",
    display: "flex",
    background:
      "radial-gradient(25.93% 25.93% at 46.84% -9.26%, #958BFF 0%, #080713 100%);",
  },
  twinBlocks: {
    border: "1px solid red ",
    width: "50%",
    // borderRadius:'40px 40px 0 0',
  },
  bubbleContainer: {
    border: "1px solid blue",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  bubble: {
    height: "300px",
    width: "500px",
    background: "blue",
    borderRadius: "30px",
    background:
      " linear-gradient(180deg, #8662EE 0%, rgba(107, 0, 220, 0.98) 100%)",
  },
  textBox: {
    height: "100px",
    border: "1px solid red",
  },
  accordionContainer: {
     border:'1px solid blue',
     minHeight:"400px",
     padding:'0 70px'
  }
  ,
  darkblue_container: {
    backgroundColor: "#25234B",
    borderRadius:'10px',
    padding:'15px',
    marginTop:'20px'
  },









};
