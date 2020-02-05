import React from "react";

import Navbar from "./components/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import PastWork from "./views/PastWork/PastWork";

import { CssBaseline, Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 65
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="scroll">
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
            <Container maxWidth="xl" className={classes.root}>
              <LandingPage />
            </Container>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
