import React from 'react';
import PropTypes from 'prop-types';

//Material-ui component imports
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { connect } from 'react-redux';

//Custom react component imports
import CreateMessage from './CreateMessage.jsx';
import SingleConversation from './SingleConversation.jsx';
import ConvoModal from './ConvoModal';

//Redux imports
import { getMessages, getSingleConvo, assignSingletoStore, createMsgPopup } from '../../actions/messages';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: "3em"
  },
};

class MessageList extends React.Component {

    handleMsgList = event => {
        let userMsgInfo = {
            userId: this.props.userId
        };

        this.props.getMessages(userMsgInfo);
    }

    handleSingleConvo = (id) => (event) => {
        const result = this.props.convoList.filter(convo => id === convo._id);

        this.props.assignSingletoStore(result);
    }

    componentDidMount() {
        this.handleMsgList()
    }

    render() {
        const { classes } = this.props;
      
        return (
          <div id="convo-page" className={classes.root}>
            { this.props.msgPopUp && <CreateMessage /> }
            { this.props.dmPopUp && <ConvoModal /> }
            <Paper id="convo-page-bar" className={classes.root} elevation={2}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Conversations
                    </Typography>
                </Toolbar>
                <IconButton aria-label="New Message">
                    <SvgIcon onClick={ () => this.props.createMsgPopup()}>
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </SvgIcon>
                </IconButton>
            </Paper>
            <div className="convo">
                {this.props.convoList.length ? this.props.convoList.sort((a,b) => {
                    if (a.messages[a.messages.length - 1].timestamp < b.messages[b.messages.length - 1].timestamp) {
                        return 1;
                    }
                    if (a.messages[a.messages.length - 1].timestamp < b.messages[b.messages.length - 1].timestamp) {
                        return -1;
                    }
                    return 0;
                }).map(convo => <SingleConversation
                        key={convo._id}
                        id={convo._id}
                        sender={convo.emails[1] === this.props.userEmail ? convo.emails[0] : convo.emails[1]}
                        message={convo.messages[convo.messages.length - 1].message}
                        timestamp={convo.messages[convo.messages.length - 1].timestamp}
                        onClick={this.handleSingleConvo(convo._id)}/> ) : <div className="filler-msg"><p>To get started, send a message.</p></div> } 
            </div>
          </div>
        );
    }
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({messages, auth}) => ({
    convoList: messages.allConvos,
    msgPopUp: messages.msgPopUp,
    userId: auth.user.userId,
    userEmail: auth.user.email_lower,
    dmPopUp: messages.dmPopUp
});

const mapDispatchToProps = ( dispatch ) => {
    return {
      getMessages: userMsgInfo => dispatch(getMessages(userMsgInfo)),
      assignSingletoStore: newConvoArray => dispatch(assignSingletoStore(newConvoArray)),
      getSingleConvo: convoId => dispatch(getSingleConvo(convoId)),
      createMsgPopup: () => dispatch(createMsgPopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MessageList));