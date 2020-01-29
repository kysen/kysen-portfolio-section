import React from "react";

import { Grid, Box, Typography, Link, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import friesSite from "../../../assets/images/screenshots/fries-site.png";

import friesThumb from "../../../assets/images/thumb-3-2/fries-thumb-3-2.png";
import barbellThumb from "../../../assets/images/thumb-3-2/barbell-thumb-3-2.png";
import ericThumb from "../../../assets/images/thumb-3-2/eric-thumb-3-2.png";

const useStyles = makeStyles(theme => ({
  websites: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paper: {
    display: "flex",
    flexDirection: "column",

    "&:hover": {
      textDecoration: "none"
    }
  },
  thumbnail: {
    width: "100%",
    height: "width",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  title: {
    color: ""
  },
  gridContainer: {
    marginTop: 40
  },
  item: {
    cursor: "pointer",
    filter: "brightness(80%)",
    transition: ".2s ease-in-out",

    "&:hover": {
      filter: "brightness(100%)"
    }
  }
}));

const portfolioItems = [
  {
    title: "Eric Aroca",
    thumbnail: ericThumb,
    screenShot: friesSite,
    description: "description",
    url: "https://www.ericaroca.com/"
  },
  {
    title: "Big Mountain Barbell",
    thumbnail: barbellThumb,
    screenShot: friesSite,
    description: "description",
    url: "https://bmbarbell.netlify.com/"
  },
  {
    title: "Dev Camp Fries",
    thumbnail: friesThumb,
    screenShot: friesSite,
    description: "description",
    url: "https://devcamp-fries-kmj.netlify.com/"
  }
];

const renderPorfolioItem = classes => {
  return portfolioItems.map((item, index) => {
    return (
      <Grid className={classes.item} item xs={12} md={6} lg={4} key={index}>
        <Link href={item.url}>
          <Paper className={classes.paper}>
            <Box
              component="img"
              src={item.thumbnail}
              className={classes.thumbnail}
            />
            <Typography>{item.title}</Typography>
          </Paper>
        </Link>
      </Grid>
    );
  });
};

function Websites() {
  const classes = useStyles();

  return (
    <div className={classes.websites}>
      <Typography variant="h3" className={classes.title}>
        Websites
      </Typography>
      <Grid container spacing={8} className={classes.gridContainer}>
        {renderPorfolioItem(classes)}
      </Grid>
    </div>
  );
}

export default Websites;
