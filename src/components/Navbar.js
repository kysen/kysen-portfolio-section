import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab, IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink, useLocation } from "react-router-dom";

const AntTabs = withStyles(theme => ({
  indicator: {
    backgroundColor: theme.palette.primary.light,

    // display: "none",
  },
}))(props => <Tabs {...props} />);

function ListItemLink(props) {
  const { primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
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
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles(() => ({
  splitNavbar: {
    display: "flex",
    justifyContent: "flex-end",
    indicator: "none",
    marginRight: "8%",
  },

  tabs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

function usePageViews(setValue) {
  let location = useLocation();
  React.useEffect(() => {
    setValue(location.pathname);
  }, [setValue, location]);
}

function Navbar({ currentTheme, toggleDarkTheme }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("/");

  // TODO
  usePageViews(setValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar>
      <Toolbar className={classes.splitNavbar}>
        <AntTabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          TabIndicatorProps={{}}
        >
          <Tab
            disableRipple
            label="About"
            value="/"
            component={RouterLink}
            to={"/"}
          />
          <Tab
            disableRipple
            label="Past Work"
            value="/past-work"
            component={RouterLink}
            to={"/past-work"}
          />
        </AntTabs>
        <IconButton
          aria-label="add an alarm"
          onClick={toggleDarkTheme}
          color="inherit"
        >
          {currentTheme.palette.type === "dark" ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
