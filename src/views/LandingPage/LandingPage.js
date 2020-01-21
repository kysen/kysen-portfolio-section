import React from "react";
import HomeScreen from "../HomeScreen/HomeScreen";
import PastWork from "../PastWork/PastWork";
import Navbar from "../../components/Navbar";

import { Container, Grid, Box, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import friesSite from "../../assets/images/screenshots/fries-site.png";
import friesThumbnail from "../../assets/images/thumbnails/fries-thumbnail.png";

const useStyles = makeStyles(theme => ({
  root: {
    // background: "rgb(36,36,36)",
    background: theme.palette.background,
    color: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fonts.title.fontSize,
  },
  gridContainer: {
    color: blue[100],
    alignItems: "center",
    marginTop: 5,
    width: "80vw",
  },
  paper: {
    backgroundColor: "black",
    color: theme.palette.primary.main,
    height: "80vw",
    cursor: "pointer",
  },
  thumbnail: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  descriptionWrapper: {
    position: "absolute",
    height: "80vw",
    width: "80vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      color: "red",
    },
  },
  description: {
    // display: "none"
  },
}));

const portfolioItems = [
  {
    title: "Eric Aroca",
    thumbnail: friesThumbnail,
    screenShot: friesSite,
    description: "description",
    url: "https://www.ericaroca.com/",
  },

  {
    title: "title2",
    thumbnail: friesThumbnail,
    screenShot: friesSite,
    description: "description",
    url: "url",
  },

  {
    title: "title3",
    thumbnail: friesThumbnail,
    screenShot: friesSite,
    description: "description",
    url: "url",
  },
];

const renderPorfolioItem = classes => {
  return portfolioItems.map((item, index) => {
    return (
      <Grid item xs={12} key={index}>
        {/* <Paper className={classes.paper}>
          <Box component="div" className={classes.descriptionWrapper}>
            <Box component="div" className={classes.description}>{item.description}</Box>
          </Box>
          <Box component="img" src={item.thumbnail} className={classes.thumbnail} />
        </Paper> */}
        <Box
          component="img"
          src={item.thumbnail}
          className={classes.thumbnail}
        />
        <Typography>
          <Link color="primary" href={item.url}>
            {item.title}
          </Link>
        </Typography>
      </Grid>
    );
  });
};

function LandingPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/past-work">
            <PastWork />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Box className={classes.title}>Portfolio</Box>
      <Grid container className={classes.gridContainer}>
        {renderPorfolioItem(classes)}
      </Grid> */}
    </Container>
  );
}

export default LandingPage;
