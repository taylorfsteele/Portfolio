import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import Tilt from 'react-tilt';
import javascript from '../Assets/javascript.svg';
import nodejs from '../Assets/nodejs.png';
import reactLogo from '../Assets/logo512.png';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    textAlign: 'center',
    width: '100%',
    textTransform: 'uppercase',
  },
  container: {
    justifyContent: 'center',
  },
  images: {
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  tilt: {
    height: 100,
    width: 100,
    borderRadius: 4,
    boxShadow: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
  },
}));

export default function About({ aboutMe }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" gutterBottom>
        {aboutMe.title}
      </Typography>
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={12} sm={9} md={4}>
          <Box className={classes.box}>
            <Typography variant="button">{aboutMe.subtitle1}</Typography>
            <Typography variant="body2">{aboutMe.caption1}</Typography>
          </Box>
          <Box className={classes.box} style={{ marginTop: 10 }}>
            <Typography variant="button">{aboutMe.subtitle2}</Typography>
            <Typography variant="body2">{aboutMe.caption2}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={4}
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Tilt className={`${classes.tilt} Tilt`} options={{ max: 10 }}>
            <div className="tilt-inner">
              <img
                className={classes.images}
                alt="Javascript"
                src={javascript}
              />
            </div>
          </Tilt>
          <Tilt className={`${classes.tilt} Tilt`} options={{ max: 10 }}>
            <div className="tilt-inner">
              <img
                className={classes.images}
                alt="NodeJs"
                src={nodejs}
                style={{ backgroundColor: '#8BC500' }}
              />
            </div>
          </Tilt>
          <Tilt className={`${classes.tilt} Tilt`} options={{ max: 10 }}>
            <div className="tilt-inner">
              <img
                className={classes.images}
                alt="React"
                src={reactLogo}
                style={{ backgroundColor: '#282c34' }}
              />
            </div>
          </Tilt>
        </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  aboutMe: PropTypes.shape({
    title: PropTypes.string,
    subtitle1: PropTypes.string,
    caption1: PropTypes.string,
    subtitle2: PropTypes.string,
    caption2: PropTypes.string,
  }),
};

About.defaultProps = {
  aboutMe: 'Taylor Steele',
};
