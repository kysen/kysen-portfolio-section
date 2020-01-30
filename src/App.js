import React from "react";

import Navbar from "./components/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import PastWork from "./views/PastWork/PastWork";

import { CssBaseline, Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // background: "rgb(36,36,36)",
    background: theme.palette.background,
    color: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gridContainer: {
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

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/past-work">
            <Container maxWidth="xl" className={classes.root}>
              <PastWork />
            </Container>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
