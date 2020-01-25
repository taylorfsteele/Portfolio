import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(((theme) => ({
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
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 4,
    padding: 2,
  },
  techOverlay: {
    position: 'absolute',
    top: theme.spacing(8),
    left: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 4,
    padding: 2,
  },
})));


export default function Projects({ projects }) {
  const classes = useStyles();


  return (
    <Grid item xs={12} sm={9} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={projects.image} />
        <Typography className={classes.titleOverlay} variant="h4">
          {projects.title}
        </Typography>
        <div className={classes.techOverlay}>
          {projects.tech.map((item) => <Typography variant="subtitle2">{item}</Typography>)}
        </div>
        <CardContent className={classes.cardContent}>
          <Typography>
            {projects.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape).isRequired,
};