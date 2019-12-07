import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid , Paper, Box, Link, Typography} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

// import ericAroca from "../../assets/images/portfolio-thumbnails/eric-aroca.png"
import ericPage from "../../assets/images/portfolio-thumbnails/eric-page.png"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontSize: theme.fonts.title.fontSize,
  },
  gridContainer: {
      color: blue[100],
      alignItems: "center",
      marginTop: 5,
      width: "80vw"
  },
  paper: {
      backgroundColor: "black",
      color: theme.palette.primary.main,
      height: "80vw",
      cursor: "pointer",
  },
  thumbnail: {
    height: "100%",
    width: "100%",
    objectFit: "cover"
  },
  descriptionWrapper: {
    position: "absolute",
    height: "80vw",
    width: "80vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'center',

    "&:hover": {
      color: "red"
    }
  }, 
  description: {
    // display: "none"
  }
}));

const portfolioItems = [
  {
    title: "Eric Aroca",
    thumbnail: ericPage,
    description: "description",
    url: "https://www.ericaroca.com/"
  },
  {
    title: "title2",
    thumbnail: "thumbnail",
    description: "description",
    url: "url"
  },
  {
    title: "title3",
    thumbnail: "thumbnail",
    description: "description",
    url: "url"
  },
];

const renderPorfolioItem = (classes) => {
  return portfolioItems.map((item, index) => {
    return (
      <Grid item xs={12} key={index}>
        <Paper className={classes.paper}>
          <Box component="div" className={classes.descriptionWrapper}>
            <Box component="div" className={classes.description}>{item.description}</Box>
          </Box>
          <Box component="img" src={item.thumbnail} className={classes.thumbnail} />
        </Paper>
        <Typography>
          <Link color="primary" href={item.url}>{item.title}</Link>
        </Typography>
      </Grid>
    )
  })
}

function LandingPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box className={classes.title}>Portfolio</Box>
      <Grid container className={classes.gridContainer}>
        {renderPorfolioItem(classes)}
      </Grid>
    </Container>
  );
}

export default LandingPage