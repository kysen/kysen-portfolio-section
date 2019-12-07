import React from 'react';
import './App.css';

import LandingPage from "./views/LandingPage/LandingPage"

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from "./components/theme"

// const theme = createMuiTheme({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
// });


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage/>
    </ThemeProvider>
  );
}

export default App;
