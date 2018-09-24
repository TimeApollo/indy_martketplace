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
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { exitMsgPopup } from '../../actions/messages';

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

class TextFields extends React.Component {
  state = {
    email: '',
    message: ''
  };

  handleChange = (email, message) => event => {
    this.setState({
      [email]: event.target.value,
      [message]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div className="msg-popup">
            <Paper id="convo-page-bar" className={classes.root} elevation={2}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        New Message
                    </Typography>
                </Toolbar>
                <IconButton aria-label="New Message">
                    <SvgIcon onClick={ () => this.props.exitMsgPopup()}>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </SvgIcon>
                </IconButton>
            </Paper>
            <form id="msg-info-wrap" className={classes.container} noValidate autoComplete="off">
                <div>To:</div>
                <TextField
                    id="standard-name"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows="26"
                    value={this.state.message}
                    onChange={this.handleChange('message')}
                    className={classes.textField}
                    margin="normal"
                />
                <Button
                    id="new-msg-btn"
                    variant="contained"
                    color="primary"
                    disableRipple
                    className={classNames(classes.margin, classes.bootstrapRoot)}
                >
                  Send
                </Button>
            </form>
        </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = ( dispatch ) => {
    return {
      exitMsgPopup: () => dispatch(exitMsgPopup())
    }
}

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(TextFields));