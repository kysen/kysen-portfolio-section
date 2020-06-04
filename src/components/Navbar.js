import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Tabs, Tab, IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

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

  const handleLink = (link) => {
    window.location.href = link
  }

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
          aria-label="toggle dark theme"
          onClick={toggleDarkTheme}
          color="inherit"
        >
          {currentTheme.palette.type === "dark" ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
        <IconButton
          aria-label="linkedin button"
          onClick={() => handleLink('https://www.linkedin.com/in/kysenjackman/')}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="linkedin button"
          href="mailto:kysenj@gmail.com"
        >
          <EmailIcon />
        </IconButton>
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
