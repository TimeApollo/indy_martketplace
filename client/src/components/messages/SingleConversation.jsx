import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createDmPopup } from '../../actions/messages';
import { connect } from 'react-redux';

import './style.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class SingleConversation extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper id='convo-wrap' className={classes.root} onClick={(event) => {
                    this.props.onClick(event)
                    this.props.createDmPopup()}} elevation={1}>
                    <div className="pic-wrap">
                        <div className="pic"></div>
                    </div>
                    <div className="info-wrap">
                        <Typography variant="headline" component="h3">
                        {this.props.sender}
                        </Typography>
                        <div className="content" component="p">
                        {this.props.message}
                        </div>
                    </div>
                    <div className="timestamp">
                        {this.props.timestamp}
                    </div>
                </Paper>
            </div>
        );
    }
}

SingleConversation.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        createDmPopup: () => dispatch(createDmPopup())
    }
}

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(SingleConversation));