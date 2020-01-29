import React from "react";

import Websites from "./Websites/Websites";
import Widgets from "./Widgets/Widgets";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40
  }
}));

function PastWork() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Websites />
      <Widgets />
    </div>
  );
}

export default PastWork;
