import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton, Tabs, Tab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink, useLocation } from "react-router-dom";

function ListItemLink(props) {
  const { primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {},
  splitNavbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "80vw",
    indicator: "none"
  },

  tabs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
  },
  menuButton: {
    color: "#ffffff"
  }
}));

function usePageViews(setValue) {
  let location = useLocation();
  React.useEffect(() => {
    setValue(location.pathname);
  }, [setValue, location]);
}

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("/");

  // TODO
  usePageViews(setValue);

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
        <Tab label="About" value="/" component={RouterLink} to={"/"} />
        <Tab
          label="Past Work"
          value="/past-work"
          component={RouterLink}
          to={"/past-work"}
        />
      </Tabs>
    </Toolbar>
    /* </AppBar> */

    // </ElevationScroll>
  );
}

export default Navbar;
