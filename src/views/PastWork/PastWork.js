import React from "react";

import { Grid, Box, Typography, Link, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import friesSite from "../../assets/images/screenshots/fries-site.png";

import friesThumb from "../../assets/images/thumb-3-2/fries-thumb-3-2.png";
import barbellThumb from "../../assets/images/thumb-3-2/barbell-thumb-3-2.png";
import ericThumb from "../../assets/images/thumb-3-2/eric-thumb-3-2.png";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80vw",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  thumbnail: {
    width: "100%",
    height: "width",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
}));

const portfolioItems = [
  {
    title: "Eric Aroca",
    thumbnail: ericThumb,
    screenShot: friesSite,
    description: "description",
    url: "https://www.ericaroca.com/",
  },
  {
    title: "title2",
    thumbnail: barbellThumb,
    screenShot: friesSite,
    description: "description",
    url: "https://bmbarbell.netlify.com/",
  },
  {
    title: "title3",
    thumbnail: friesThumb,
    screenShot: friesSite,
    description: "description",
    url: "https://devcamp-fries-kmj.netlify.com/",
  },
];

const renderPorfolioItem = classes => {
  return portfolioItems.map((item, index) => {
    return (
      <Grid item xs={12} md={6} lg={4} key={index}>
        <Paper className={classes.paper}>
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
        </Paper>
      </Grid>
    );
  });
};

function PastWork() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Portfolio
      </Typography>
      <Grid container spacing={8} className={classes.gridContainer}>
        {renderPorfolioItem(classes)}
      </Grid>
    </div>
  );
}

export default PastWork;
