import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './App.css';
import HeroCard from './Components/HeroCard';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';
import subway from './Assets/subway.jpg';
import jobBoard from './Assets/jobBoard.jpg';
import timer from './Assets/timer.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
      overflow: 'hidden',
    },
  },
  paper: {
    backgroundColor: 'lightgrey',
  },
  container: {
    justifyContent: 'center',
    padding: theme.spacing(1),
    margin: 0,
    width: '100%',
  },
}));

const footer = {
  gitHub: 'GitHub',
  gitHubUrl: 'https://github.com/taylorfsteele',
  linkedIn: 'LinkedIn',
  linkedInUrl: 'https://www.linkedin.com/in/taylorfsteele/',
  resume: 'resume',
  resumeUrl: '',
  trello: 'https://trello.com/b/inBbrP3X/portfolio-website',
};

const navBar = {
  title: 's',
  image: 'https://iili.io/HNxj7p.png',
  imgText: 'main image desc',
};

const heroCard = {
  title: 'Taylor Steele',
  caption: 'Software Engineer',
};

const aboutMe = {
  title: 'Full Stack Focused',
  subtitle1: 'Motivated to Master',
  caption1: 'As a tenacious self-taught programmer, I approach every project as an opportunity to challenge my own knowledge and limitations in the pursuit of mastery.',
  subtitle2: 'A Person-First Approach',
  caption2: 'I leverage my hospitality background to create compelling customer experiences. I strive for experience in use, elegance in design.',
};

const projects = [
  {
    title: 'Walk Score',
    tech: ['React', 'Firebase Cloud Firestore', 'Express | NodeJs', 'Google Maps API'],
    description: 'Find and Compare Public Transit & Walkability Scores',
    image: subway,
    imageText: 'Walk Score',
    modal: {
      modalTitle: 'yo',
      modalImage: 'https://source.unsplash.com/random',
      modalDescription: 'This rocks',
    },
  },
  {
    title: 'Engineering Job Board',
    tech: ['React', 'Express | NodeJs', 'Cronjob Library', 'GitHub Jobs API'],
    description: 'Job board filtered for entry developer positions',
    image: jobBoard,
    imageText: 'Job Board',
    modal: {
      modalTitle: 'Sup',
      modalImage: 'https://source.unsplash.com/random',
      modalDescription: 'This rocks',
    },
  },
  {
    title: 'Simple Tomato Timer',
    tech: ['React', 'Material UI', 'CSS'],
    description: 'Simple Productivity Timer using the Pomodoro Technique',
    image: timer,
    imageText: 'Tomato Timer',
    modal: {
      modalTitle: 'Cool',
      modalImage: 'https://source.unsplash.com/random',
      modalDescription: 'This rocks',
    },
  },
];

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeroCard heroCard={heroCard} navBar={navBar} />
      <About aboutMe={aboutMe} />
      <Paper elevation={0} square={matches} className={classes.paper}>
        <Grid id="projects" className={classes.container} container spacing={3}>
          {projects.map((projectsProp) => (
            <Projects projects={projectsProp} />
          ))}
        </Grid>
        <Paper elevation={0} square={matches} className={classes.paper}>
          <Footer footer={footer} />
        </Paper>
      </Paper>
    </div>
  );
}
