import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SingleConversation from './SingleConversation.jsx';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { connect } from 'react-redux';
import { getMessages } from '../../actions/messages';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class MessageList extends React.Component {
    componentDidMount() {
        this.props.getMessages();
    }

    render() {
        const { classes } = this.props;
      
        return (
          <div id="convo-page" className={classes.root}>
            <Paper id="convo-page-bar" className={classes.root} elevation={2}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Conversations
                    </Typography>
                </Toolbar>
                <IconButton aria-label="New Message">
                    <SvgIcon>
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </SvgIcon>
                </IconButton>
            </Paper>
            <div className="convo-wrap">
                {this.props.convoList.length ? this.props.convoList.map( convo => <SingleConversation sender={convo.senderId} message={convo.newMsg} timestamp={convo.newMsgTime}/> ) : null }
            </div>
          </div>
        );
    }
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({messages}) => ({
    convoList: messages.convos
});

const mapDispatchToProps = ( dispatch ) => {
    return {
      getMessages: () => {dispatch(getMessages())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MessageList));