import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    marginTop: 60,
  },
  gridContainer: {
    marginTop: 40,
  },
}));

function HomeScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="div" className={classes.header} variant="h2">
        <Box textAlign="center">Kysen Jackman</Box>{" "}
      </Typography>
      <Typography component="div" className={classes.header} variant="h5">
        <Box textAlign="center">
          Portfolio Website for Kysen Jackman, Fullstack Web Developer with
          React.js and Python
        </Box>{" "}
      </Typography>
      <Typography component="div" className={classes.header} variant="h6">
        <Box textAlign="center">This website is a work in progress</Box>{" "}
      </Typography>
    </div>
  );
}

export default HomeScreen;
