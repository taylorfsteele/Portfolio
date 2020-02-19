import React from 'react';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper, useMediaQuery } from '@material-ui/core';
import HeroCard from './Components/HeroCard';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';
import subway from './Assets/subway.jpg';
import jobBoard from './Assets/jobBoard.jpg';
import timer from './Assets/timer.jpg';
import background from './Assets/background.jpg';
import walkScoreGif from './Assets/WalkScore.gif';
import tomatoGif from './Assets/TomatoGif.gif';
import jobGif from './Assets/JobsGif.gif';

const useStyles = makeStyles(theme => ({
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
  resumeLink: '/src/Assets/Taylor Steele Resume.pdf',
  siteBy: 'Site By Taylor Steele',
  trelloUrl: 'https://trello.com/b/inBbrP3X/portfolio-website',
  portfolioGithubUrl: 'https://github.com/taylorfsteele/Portfolio',
};

const navBar = {
  title: 's',
  image: background,
  imgText: 'main image desc',
};

const heroCard = {
  title: 'Taylor Steele',
  caption: 'Software Engineer',
};

const aboutMe = {
  title: 'Full Stack Focused',
  subtitle1: 'Motivated to Master',
  caption1:
    'As a tenacious self-taught programmer, I approach every project as an opportunity to challenge my own knowledge and limitations in the pursuit of mastery.',
  subtitle2: 'A Person-First Approach',
  caption2:
    'Leveraging my hospitality background, my approach is person-centric in order to create compelling customer experiences. I strive for experience in use, elegance in design.',
};

const projects = [
  {
    title: 'Walk Score',
    tech: [
      'React',
      'Express | NodeJs',
      'Google Cloud Firestore',
      'Google Maps API',
    ],
    description: 'Find and Compare Public Transit & Walkability Scores',
    sourceUrl: 'https://github.com/taylorfsteele/WalkScoreProject',
    image: subway,
    imageText: 'Walk Score',
    modal: {
      modalTitle: 'Walk Score',
      modalImage: walkScoreGif,
      modalFeatures: [
        'API Calls to Google Maps Geocoding API and Walk Score API',
        'Utilizes Google Cloud Firestore for CRUD Operations',
        'Easy-to-Read Promise Handling with Async / Await Syntax',
        'Integrated ESLint with Airbnb Style Guide',
      ],
      modalLinks: [
        {
          title: 'Source Code',
          url: 'https://github.com/taylorfsteele/WalkScoreProject',
        },
        {
          title: 'Trello Board',
          url: 'https://trello.com/b/QDADh4mD/job-walk-score',
        },
        {
          title: 'Demo Coming Soon!',
          url: '',
        },
      ],
    },
  },
  {
    title: 'Engineering Job Board',
    tech: [
      'React',
      'Express | NodeJs',
      'CronJob Library',
      'Redis NoSQL Database',
    ],
    description: 'Job board filtered for entry developer positions',
    sourceUrl: 'https://github.com/taylorfsteele/Entry-Job-Board',
    image: jobBoard,
    imageText: 'Job Board',
    modal: {
      modalTitle: 'Entry Level Engineering Job Board',
      modalImage: jobGif,
      modalFeatures: [
        'Utilizes NodeJS CronJob library for scheduled jobs fetch',
        'API Calls to GitHub Jobs to retvieve jobs',
        'Stores API Calls and serves to Front-End with Redis Cloud Database',
        'React Front-End with Material UI Styled Component Library, NodeJS with Express Back-End',
      ],
      modalLinks: [
        {
          title: 'Source Code',
          url: 'https://github.com/taylorfsteele/Entry-Job-Board',
        },
      ],
    },
  },
  {
    title: 'Simple Tomato Timer',
    tech: ['React', 'Material UI', 'CSS'],
    description: 'Simple Productivity Timer using the Pomodoro Technique',
    sourceUrl: 'https://github.com/taylorfsteele/SimpleTomatoTimer',
    image: timer,
    imageText: 'Tomato Timer',
    modal: {
      modalTitle: 'Cool',
      modalImage: tomatoGif,
      modalFeatures: [
        'React Project utilizing functional components and State & Effect Hooks',
        'Material UI Styled Component Library',
      ],
      modalLinks: [
        {
          title: 'Source Code',
          url: 'https://github.com/taylorfsteele/SimpleTomatoTimer',
        },
        {
          title: 'Demo Coming Soon!',
          url: '',
        },
      ],
    },
  },
];

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root} id="#">
      <CssBaseline />
      <HeroCard heroCard={heroCard} navBar={navBar} />
      <About aboutMe={aboutMe} />
      <Paper elevation={0} square={matches} className={classes.paper}>
        <Grid id="projects" className={classes.container} container spacing={3}>
          {projects.map((projectsProp, i) => (
            <Projects key={i} projects={projectsProp} />
          ))}
        </Grid>
        <Paper elevation={0} square={matches} className={classes.paper}>
          <Footer footer={footer} />
        </Paper>
      </Paper>
    </div>
  );
}
