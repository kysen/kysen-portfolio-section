import React from "react";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
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
      <Navbar />
      <Typography component="div" className={classes.header} variant="h2">
        <Box textAlign="center">Kysen Jackman</Box>{" "}
      </Typography>
      <Grid container spacing={7} className={classes.gridContainer}>
        <Grid item xs={4}>
          {" "}
          <Paper>hi</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>hi</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>hi</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeScreen;
