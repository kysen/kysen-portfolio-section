import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  //   Typography,
  IconButton,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
  root: {},
  splitNavbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "80vw",
    indicator: "none",
  },
  //   indicator: {
  //     display: "none",
  //   },
  tabs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("about");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <ElevationScroll {...props}>
    // <AppBar position="fixed" className={classes.root} color="background.dark">
    <Toolbar className={classes.splitNavbar}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        style={{ display: "none" }}
      >
        <MenuIcon />
      </IconButton>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        className={classes.tabs}
        // indicatorColor="primary"
      >
        <Tab label="About" value="about" />
        <Tab label="Past Work" />
      </Tabs>
    </Toolbar>
    /* </AppBar> */
    // </ElevationScroll>
  );
}

export default Navbar;
