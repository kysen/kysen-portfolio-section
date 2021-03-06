import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import LandingPage from "./views/LandingPage/LandingPage";
import PastWork from "./views/PastWork/PastWork";

import { CssBaseline, Container, ThemeProvider, useMediaQuery } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: media => media ? 56 : 64 ,
  },
});


const App = () => {
  const [currentTheme, setTheme] = React.useState({
    palette: {
      type: "dark",
      primary: indigo,
    },
  });
  const media = useMediaQuery('(max-width:600px)');
  
  console.log(media, 'hi')
  const classes = useStyles(media);

  const toggleDarkTheme = () => {
    let newPaletteType =
      currentTheme.palette.type === "light" ? "dark" : "light";
    setTheme(prevState => {
      return {
        ...prevState,
        palette: {
          type: newPaletteType,
        },
      };
    });
  };
  let muiTheme = createMuiTheme(currentTheme);
  muiTheme = responsiveFontSizes(muiTheme);

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="scroll">
        <CssBaseline />
        <BrowserRouter>
          <Navbar
            currentTheme={currentTheme}
            toggleDarkTheme={toggleDarkTheme}
          />

          <Switch>
            <Route path="/past-work">
              <Container maxWidth="xl" className={classes.root}>
                <PastWork />
              </Container>
            </Route>
            <Route path="/">
              <Container maxWidth="xl" className={classes.root}>
                <LandingPage media={media} />
              </Container>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
