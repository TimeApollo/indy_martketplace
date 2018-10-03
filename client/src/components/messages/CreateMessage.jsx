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

import { postMessage, exitMsgPopup } from '../../actions/messages';

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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleMessagePost = event => {
    let messageInfo = {
      senderEmail: this.props.userEmail,
      email: this.state.email.toLowerCase(),
      message: this.state.message
    };

    this.setState({email: '',
                  message: ''})
    this.props.postMessage(messageInfo);
  } 

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
              <div className="to">To:</div>
              <TextField
                name="email"
                id="standard-name"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                name="message"
                id="standard-multiline-static"
                label="Message"
                multiline={true}
                rows="20"
                value={this.state.message}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"

              />
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
        </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  userEmail: auth.user.email_lower
})

const mapDispatchToProps = dispatch => {
    return {
      postMessage: messageInfo => {
        dispatch(postMessage(messageInfo))
      },
      exitMsgPopup: () => dispatch(exitMsgPopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TextFields));