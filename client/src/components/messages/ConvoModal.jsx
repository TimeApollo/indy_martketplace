import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { postMessage, exitDmPopup } from '../../actions/messages';

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
    state = {
        messages: this.props.messages,
        message: ''
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleMessagePost = event => {
        let messageInfo = {
          senderEmail: this.props.userEmail,
          email: this.props.currentEmails[1] === this.props.userEmail 
                ? this.props.currentEmails[0]
                : this.props.currentEmails[1],
          message: this.state.message
        };
    
        this.setState({message: ''})
        this.props.postMessage(messageInfo);
    }

    render() {
    const { classes } = this.props;

    return (
        <div className="msg-popup">
            <div className="convo-nav">
                <div className="convo-who">Message with: {this.props.currentEmails[1] === this.props.userEmail 
                    ? this.props.currentEmails[0]
                    : this.props.currentEmails[1]}</div>
                <IconButton >
                    <SvgIcon style={{color: "white"}}onClick={ () => this.props.exitDmPopup()}>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </SvgIcon>
                </IconButton>
            </div>
            <div className="convo-modal-wrap">
                <div className="msgs-wrap">
                    {this.props.currentMessages.length && this.props.currentMessages.map(message => {
                        if (message !== null) {
                            if (message.email === this.props.userEmail) {
                                return (<div className="sender-msg-wrap">
                                            <div className="sender-bubble">{message.message}</div>
                                            <div className="single-msg-time">{message.timestamp}</div>
                                        </div>);
                            } else {
                                return (<div className="rec-msg-wrap">
                                            <div className="rec-bubble">{message.message}</div>
                                            <div className="single-msg-time">{message.timestamp}</div>
                                        </div>);
                            }
                        }
                    })}
                </div>
                <form id="write-msg-wrap" noValidate autoComplete="off">
                    <input className="msg-input" type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                    <Button
                        id="new-msg-btn"
                        disableRipple
                        className={classNames(classes.margin, classes.bootstrapRoot)}
                        onClick={this.handleMessagePost}>
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
  }
}

DirectConvo.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({auth, messages}) => ({
    userEmail: auth.user.email_lower,
    currentEmails: messages.currentEmails,
    currentMessages: messages.currentMessages
});

const mapDispatchToProps = ( dispatch ) => {
    return {
        postMessage: messageInfo => {
            dispatch(postMessage(messageInfo))
        },
        exitDmPopup: () => dispatch(exitDmPopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DirectConvo));