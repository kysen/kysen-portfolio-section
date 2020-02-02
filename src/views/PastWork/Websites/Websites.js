import React from "react";

import { Grid, Box, Typography, Link, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import friesSite from "../../../assets/images/screenshots/fries-site.png";

import friesThumb from "../../../assets/images/thumb-3-2/fries-thumb-3-2.png";
import barbellThumb from "../../../assets/images/thumb-3-2/barbell-thumb-3-2.png";
import ericThumb from "../../../assets/images/thumb-3-2/eric-thumb-3-2.png";

const useStyles = makeStyles(theme => ({
  websitesRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "&:hover": {
      textDecoration: "none",
    },
  },
  thumbnail: {
    width: "100%",
    height: "width",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  gridContainer: {
    marginTop: 40,
  },
  item: {
    cursor: "pointer",
    filter: "brightness(90%)",
    transition: ".2s ease-in-out",

    "&:hover": {
      filter: "brightness(100%)",
    },
  },
  paperTitle: {
    paddingTop: 5,
  },
  paperDescription: {
    padding: "5px 15px",
  },
}));

const portfolioItems = [
  {
    title: "Eric Aroca",
    thumbnail: ericThumb,
    screenShot: friesSite,
    description:
      "Static React.js website styled with SCSS, project was built from scratch for a motivational speaker",
    url: "https://www.ericaroca.com/",
  },
  {
    title: "Big Mountain Barbell",
    thumbnail: barbellThumb,
    screenShot: friesSite,
    description:
      "Static React.js, This was a group project working for a company I helped start called Exposure. Site was built for a private gym in Midvale, UT",
    url: "https://bmbarbell.netlify.com/",
  },
  {
    title: "Dev Camp Fries",
    thumbnail: friesThumb,
    screenShot: friesSite,
    description:
      "Built this at Bottega.Tech, just a really simple HTML site styled with CSS",
    url: "https://devcamp-fries-kmj.netlify.com/",
  },
];

const renderPorfolioItem = classes => {
  return portfolioItems.map((item, index) => {
    return (
      <Grid className={classes.item} item xs={12} md={6} lg={4} key={index}>
        <Link underline="none" href={item.url}>
          <Paper className={classes.paper}>
            <Box
              component="img"
              src={item.thumbnail}
              className={classes.thumbnail}
            />
            <Typography variant="h6" className={classes.paperTitle}>
              {item.title}
            </Typography>
            <Typography variant="body1" className={classes.paperDescription}>
              {item.description}
            </Typography>
          </Paper>
        </Link>
      </Grid>
    );
  });
};

function Websites() {
  const classes = useStyles();

  return (
    <div className={classes.websitesRoot}>
      <Typography variant="h3" className={classes.title} color="primary">
        Websites
      </Typography>
      <Grid container spacing={8} className={classes.gridContainer}>
        {renderPorfolioItem(classes)}
      </Grid>
    </div>
  );
}

export default Websites;
