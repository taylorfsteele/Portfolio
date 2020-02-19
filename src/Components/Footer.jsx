import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, IconButton, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
          <IconButton href="#" className={classes.menuButton} color="inherit">
            s
          </IconButton>
        </Grid>
        <Grid item xs={12} md={6} className={classes.item}>
          <Box className={classes.box} borderTop={1}>
            <Typography>
              <Button
                href={footer.gitHubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {footer.gitHub}
              </Button>
            </Typography>
            <Typography>
              <Button
                href={footer.linkedInUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {footer.linkedIn}
              </Button>
            </Typography>
            <Typography>
              <Button
                href={footer.resumeLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {footer.resume}
              </Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.item}>
          <Box className={classes.box} borderTop={1}>
            <Typography variant="button">
              <Button
                href={footer.trelloUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {footer.siteBy}
              </Button>
              <Button
                href={footer.portfolioGithubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Source Code
              </Button>
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
    resumeLink: PropTypes.string,
    siteBy: PropTypes.string,
    trelloUrl: PropTypes.string,
    portfolioGithubUrl: PropTypes.string,
  }),
};

Footer.defaultProps = {
  footer: 'Taylor Steele',
};
