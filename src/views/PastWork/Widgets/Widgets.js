import React from "react";

import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SoloLogo from "./each-widget/SoloLogo";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px"
  },
  paper: {
    display: "flex",
    flexDirection: "column",

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
  title: {
  },
  gridContainer: {
    marginTop: 40,
  },
  item: {
    filter: "brightness(60%)",
    transition: ".2s ease-in-out",

    "&:hover": {
      filter: "brightness(100%)"
    }
  }
}));

const widgets = [
  {
    component: <SoloLogo />,
    title: "Spinning Logo"
  }
];

const renderPorfolioItem = classes => {
  return widgets.map((item, index) => {
    return (
      <Grid className={classes.item} item xs={12} md={6} lg={4} key={index}>
        <Paper>{item.component}</Paper>
        <Typography>{item.title}</Typography>
      </Grid>
    );
  });
};

function Websites() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title} color="primary">
        Widgets
      </Typography>
      <Grid container spacing={8} className={classes.gridContainer}>
        {renderPorfolioItem(classes)}
      </Grid>
    </div>
  );
}

export default Websites;
