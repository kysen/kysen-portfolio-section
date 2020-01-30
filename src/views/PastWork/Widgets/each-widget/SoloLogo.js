import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({ root: {} }));

function SoloLogo() {
  const classes = useStyles();

  return <Typography component="div">Solo Logo</Typography>;
}

export default SoloLogo;
