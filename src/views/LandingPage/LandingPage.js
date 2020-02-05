import React from "react";
import HomeScreen from "./HomeScreen/HomeScreen";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // background: "rgb(36,36,36)",
    background: theme.palette.background,
    color: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  gridContainer: {
    alignItems: "center",
    marginTop: 5,
    width: "80vw"
  },
  paper: {
    backgroundColor: "black",
    color: theme.palette.primary.main,
    height: "80vw",
    cursor: "pointer"
  },
  thumbnail: {
    height: "100%",
    width: "100%",
    objectFit: "cover"
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
      color: "red"
    }
  },
  description: {
    // display: "none"
  }
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <HomeScreen />
    </Container>
  );
}

export default LandingPage;
