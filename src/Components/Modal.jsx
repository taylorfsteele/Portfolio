import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  item: {
    justifyContent: 'center',
  },

  image: {
    maxWidth: '100%',
  },
}));

export default function Modal({ open, handleClose, projects }) {
  const classes = useStyles();
  const { modal } = projects;
  const listItems = modal.modalFeatures.map(number => (
    <li key={number.toString()}>{number}</li>
  ));

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle onClose={handleClose} id="alert-dialog-slide-title">
          {modal.modalTitle}
        </DialogTitle>
        {handleClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        <DialogContent dividers>
          <Grid container spacing={3} className={classes.container}>
            <Grid item className={classes.item} xs={9}>
              <img
                className={classes.image}
                src={modal.modalImage}
                alt="Modal"
              />
            </Grid>
            <Divider />
            <Grid item xs>
              <Typography align="left">Project Highlights</Typography>
              <ul
                style={{
                  listStyleType: 'circle',
                  paddingLeft: 0,
                  textAlign: 'left',
                }}
              >
                {listItems}
              </ul>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {modal.modalLinks.map((element, i) => {
            return (
              <Button
                color="primary"
                href={element.url}
                rel="noopener noreferrer"
                target="_blank"
                key={i}
              >
                {element.title}
              </Button>
            );
          })}
        </DialogActions>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
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
