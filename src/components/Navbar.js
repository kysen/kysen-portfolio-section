import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Tabs, Tab } from "@material-ui/core";

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

const useStyles = makeStyles(theme => ({
  root: {},
  splitNavbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "80vw",
    indicator: "none",
  },

  tabs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    color: theme.palette.primary.main,
  },
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
    <Toolbar className={classes.splitNavbar}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        className={classes.tabs}
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
  );
}

export default Navbar;
