import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { animateScroll as scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    padding: theme.spacing(1),
    backgroundColor: 'transparent',
  },
  logo: {
    fontFamily: "'Monoton', cursive",
    fontSize: 40,
  },
}));

export default function NavBar({ navBar }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" elevation={0} className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={scroll.scrollToTop} className={classes.logo} edge="start" color="inherit" href="#">
            {navBar.title}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
NavBar.propTypes = {
  navBar: PropTypes.shape.isRequired,
};
