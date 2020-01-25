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
};

const navBar = {
  title: 's',
  image: 'https://iili.io/HNxj7p.png',
  imgText: 'main image desc',
};

const heroCard = {
  title: 'Taylor Steele',
  caption: 'Developer',
};

const aboutMe = {
  title: 'Buzzword Title',
  caption: 'Here\'s a really cool description of stuff about me. I\'m awesome.',
};

const projects = [
  {
    title: 'Project 1',
    tech: ['React', 'Redux', 'NodeJs', 'Twitter API'],
    description: 'This is a description of the project highlighting some cool stuff',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Project 2',
    tech: ['React', 'NodeJs'],
    description: 'This is a description of the project highlighting some cool stuff',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text 2',
  },
  {
    title: 'Project 3',
    tech: ['React', 'Redux', 'NodeJs'],
    description: 'This is a description of the project highlighting some cool stuff',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text 3',
  },
  {
    title: 'Project 4',
    tech: ['React', 'Redux', 'NodeJs'],
    description: 'This is a description of the project highlighting some cool stuff',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text 3',
  },
  {
    title: 'Project 5',
    tech: ['React', 'Redux', 'NodeJs'],
    description: 'This is a description of the project highlighting some cool stuff',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text 3',
  },
  {
    title: 'Project 6',
    tech: ['React', 'Redux', 'NodeJs'],
    description: 'This is a description of the project highlighting some cool stuff',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text 3',
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
      </Paper>
      <Footer footer={footer} />
    </div>
  );
}
