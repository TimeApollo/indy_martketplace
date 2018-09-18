import React from 'react';
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

function PaperSheet(props) {
    const { classes } = props;

    return (
        <div>
            <Paper id='convo-wrap' className={classes.root} elevation={1}>
                <div className="pic-wrap"></div>
                <div className="info-wrap">
                    <Typography variant="headline" component="h3">
                    Floop
                    </Typography>
                    <div className="content" component="p">
                    Scoop diddy poop
                    </div>
                </div>
                <div className="timestamp">2h</div>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);