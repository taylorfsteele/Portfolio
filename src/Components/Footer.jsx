import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: 'aqua',
    // display: 'flex',
    padding: theme.spacing(2),
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  menuButton: {
    margin: theme.spacing(1),
    fontFamily: "'Monoton', cursive",
    fontSize: 50,
  },
  box: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 400,
  },
}));


export default function Footer({ footer }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item sm={12} className={classes.item}>
          <IconButton onClick={scroll.scrollToTop} className={classes.menuButton} color="inherit">
            s
          </IconButton>
        </Grid>
        <Grid item xs={12} md={6} className={classes.item}>
          <Box className={classes.box} borderTop={1}>
            <Typography>
              <Button href={footer.gitHubUrl} rel="noopener noreferrer" target="_blank">{footer.gitHub}</Button>
            </Typography>
            <Typography>
              <Button href={footer.linkedInUrl} rel="noopener noreferrer" target="_blank">{footer.linkedIn}</Button>
            </Typography>
            <Typography>
              <Button href={footer.resume} rel="noopener noreferrer" target="_blank">{footer.resume}</Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.item}>
          <Box className={classes.box} borderTop={1}>
            <Typography variant="button">
              <Button href={footer.trello} rel="noopener noreferrer" target="_blank">Site by Taylor Steele</Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  footer: PropTypes.shape({
    gitHub: PropTypes.string,
    gitHubUrl: PropTypes.string,
    linkedIn: PropTypes.string,
    linkedInUrl: PropTypes.string,
    resume: PropTypes.string,
    resumeUrl: PropTypes.string,
    trello: PropTypes.string,
  }),
};

Footer.defaultProps = {
  footer: 'Taylor Steele',
};
