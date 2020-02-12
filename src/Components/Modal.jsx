import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  item: {
    maxWidth: 200,
  },
  image: {
    width: '100%',
    paddingRight: theme.spacing(2),
  },
}));

export default function Modal({ open, handleClose, projects }) {
  const classes = useStyles();
  const listItems = projects.modal.modalFeatures.map(number => (
    <li key={number.toString()}>{number}</li>
  ));

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle onClose={handleClose} id="alert-dialog-slide-title">
          {projects.modal.modalTitle}
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
            <Grid item className={classes.item} xs={6}>
              <Box borderRight={1}>
                <img
                  className={classes.image}
                  src={projects.modal.modalImage}
                  alt="Modal"
                />
              </Box>
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Key Features</Typography>
              <ul style={{ listStyleType: 'none' }}>{listItems}</ul>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            View Demo
          </Button>
          <Button onClick={handleClose} color="primary">
            Source Code
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.func,
  handleClose: PropTypes.func,
  projects: PropTypes.shape,
};

Modal.defaultProps = {
  open: 'Open Function Here',
  handleClose: 'Close Function Here',
  projects: 'Here are my Projects',
};
