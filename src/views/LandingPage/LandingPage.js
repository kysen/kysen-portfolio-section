import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid , Paper, Box} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.main,
    height: "100vh"
  },
  title: {
      fontSize: theme.fonts.title.fontSize,
    },
    gridContainer: {
        color: blue[100],
        alignItems: "center",
        marginTop: 5
    },
    paper: {
        backgroundColor: "black",
        color: theme.palette.primary.main
        ,height: "90vw"
    }
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box className={classes.title}>Portfolio</Box>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid xs={12} item>
            <Paper className={classes.paper}>Kysen Jackman</Paper>
        </Grid>
        <Grid xs={12} item>
            <Paper className={classes.paper}>Kysen Jackman</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage