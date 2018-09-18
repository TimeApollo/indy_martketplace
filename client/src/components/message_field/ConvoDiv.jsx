import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../App.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

class ConvoDiv extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper id='convo-wrap' className={classes.root} elevation={1}>
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
                    <div className="timestamp">{this.props.timestamp}</div>
                </Paper>
            </div>
        );
    }
}

ConvoDiv.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConvoDiv);