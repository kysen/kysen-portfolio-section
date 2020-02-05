import React from "react";

import { Grid, Typography, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SoloLogo from "./each-widget/SoloLogo";

const useStyles = makeStyles(theme => ({
  widgetsRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  widgetPaper: {
    display: "flex",
    flexDirection: "column",

    "&:hover": {
      textDecoration: "none",
    },
  },

  title: {},
  gridContainer: {
    marginTop: 40,
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
  },
}));

const widgets = [
  {
    component: <SoloLogo />,
    title: "Spinning Logo",
  },
];

const renderPorfolioItem = classes => {
  return widgets.map((item, index) => {
    return (
      <Grid className={classes.gridItem} item xs={12} md={6} lg={4} key={index}>
        <Paper className={classes.widgetPaper}>
          <Box>{item.component}</Box>
          <Typography
            align="center"
            variant="h6"
            className={classes.paperTitle}
          >
            {item.title}
          </Typography>
        </Paper>
      </Grid>
    );
  });
};

function Websites() {
  const classes = useStyles();

  return (
    <div className={classes.widgetsRoot}>
      <Typography variant="h3" className={classes.title}>
        Widgets
      </Typography>
      <Grid container spacing={8} className={classes.gridContainer}>
        {renderPorfolioItem(classes)}
      </Grid>
    </div>
  );
}

export default Websites;
