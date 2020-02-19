import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from '@material-ui/core';
import Modal from './Modal';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 0,
    paddingTop: theme.spacing(20), // 16:9
  },
  titleOverlay: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0,0,0,.7)',
    borderRadius: 4,
    padding: 2,
  },
  techOverlay: {
    position: 'absolute',
    top: theme.spacing(8),
    left: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0,0,0,.7)',
    borderRadius: 4,
    padding: 2,
  },
}));

export default function Projects({ projects }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal projects={projects} open={open} handleClose={handleClose} />
      <Grid item xs={12} sm={9} md={4}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={projects.image} />
          <Typography className={classes.titleOverlay} variant="h4">
            {projects.title}
          </Typography>
          <div className={classes.techOverlay}>
            {projects.tech.map((item, i) => (
              <Typography variant="subtitle2" key={i}>
                {item}
              </Typography>
            ))}
          </div>
          <CardContent className={classes.cardContent}>
            <Typography>{projects.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                handleClickOpen();
              }}
              size="small"
              color="primary"
            >
              More
            </Button>
            <Button
              size="small"
              color="primary"
              href={projects.sourceUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    imageText: PropTypes.string,
    modal: PropTypes.object,
    sourceUrl: PropTypes.string,
    tech: PropTypes.array,
    title: PropTypes.string,
  }).isRequired,
};
