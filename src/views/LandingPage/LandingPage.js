import React from "react";
import HomeScreen from "./HomeScreen/HomeScreen";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function LandingPage(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <HomeScreen media={props.media} />
    </Container>
  );
}

export default LandingPage;
