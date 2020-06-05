import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

import faceshot from "../../../assets/images/face-shot/kysen-faceshot.png";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100vw',
    flexDirection: matches => matches ? 'column-reverse' : 'row'
  },
  header: {
    marginTop: 60,
  },
  gridContainer: {
    marginTop: 40,
  },
  right: {
    padding: '0px 40px',
    flexGrow: 1,
  },
  image: {
    height: 'calc(100vh - 64px)'
  }
})

function HomeScreen(props) {
  const media = props.media;
  const classes = useStyles(media);

  return (
    <div className={classes.root}>
      <img className={classes.image} style={media ? {height: 'calc(100vh - 56px)'} : {}} src={faceshot} alt=""></img>
      <div className={classes.right}>
        <Typography component="div" className={classes.header} variant="h2">
          <Box textAlign="center">Kysen Jackman</Box>{" "}
        </Typography>
        <Typography component="div" className={classes.header} variant="h5">
          <Box textAlign="center">
            Portfolio Website for Kysen Jackman, Fullstack Web Developer
          </Box>{" "}
          <Box textAlign="center">
            Built with React.js
          </Box>{" "}
        </Typography>
        <Typography component="div" className={classes.header} variant="h6">
          <Box textAlign="center">This website is a work in progress</Box>{" "}
        </Typography>
      </div>
    </div>
  );
}

export default HomeScreen;
