import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link, animateScroll } from 'react-scroll';
import NavBar from './NavBar';


const useStyles = makeStyles((theme) => ({
  heroCard: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    marginBottom: theme.spacing(4),
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '95vh',
    [theme.breakpoints.down('sm')]: {
      // margin: theme.spacing(-3),
      marginBottom: theme.spacing(4),
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  heroContent: {
    textAlign: 'center',
    margin: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
      marginTop: theme.spacing(2),
    },
    color: theme.palette.common.white,
  },
}));

export default function HeroCard({ navBar, heroCard }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper elevation={0} square={matches} className={classes.heroCard} style={{ backgroundImage: `url(${navBar.image})` }}>
      <img style={{ display: 'none' }} src={navBar.image} alt={navBar.imageText} />
      <Paper elevation={0} square={matches} className={classes.overlay}>
        <NavBar navBar={navBar} />
        <div className={classes.heroContent}>
          <Typography variant="h2" gutterBottom style={{ textTransform: 'uppercase' }}>
            <Fade in timeout={1000}>
              <Box fontWeight="fontWeightLight" letterSpacing={6}>
                {heroCard.title}
              </Box>
            </Fade>
          </Typography>
          <Typography variant="h6" gutterBottom style={{ textTransform: 'uppercase' }}>
            <Fade in timeout={3000}>
              <Box fontWeight="fontWeightLight" letterSpacing={2}>
                {heroCard.caption}
              </Box>
            </Fade>
          </Typography>
          <Link
            activeClass="active"
            to="projects"
            spy
            smooth
            offset={-30}
            duration={600}
          >
            <Fade in timeout={3000}>
              <Button style={{ marginTop: 10 }} variant="contained" href="#projects">See Projects</Button>
            </Fade>
          </Link>
        </div>
      </Paper>
    </Paper>

  );
}

HeroCard.propTypes = {
  navBar: PropTypes.shape.isRequired,
  heroCard: PropTypes.shape.isRequired,
};
