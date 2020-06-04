import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>footer</div>
  )
}

export default Footer