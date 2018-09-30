import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import './style.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

class DirectConvo extends React.Component {

    render() {
    const { classes } = this.props;

    return (
        <div className="msg-popup">
            <Paper id="convo-page-bar" className={classes.root} elevation={2}>
                <div className="msgs-wrap"></div>
                <form id="write-msg-wrap" className={classes.container} noValidate autoComplete="off">
                    <Button
                        id="new-msg-btn"
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classNames(classes.margin, classes.bootstrapRoot)}
                        onClick={this.handleMessagePost}>
                        Send
                    </Button>
                </form>
            </Paper>
        </div>
    );
  }
}

DirectConvo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DirectConvo);