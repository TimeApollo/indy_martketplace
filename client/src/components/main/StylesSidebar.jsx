import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "15em",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  edit: {
    color: "gray", 

  },
});

class StylesSidebar extends Component {
  render() {

  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Paper className={classes.root} elevation={10}>
        <Typography variant="headline" component="h1">
          STYLES
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography component="p">
        <List>
          {this.props.user.styles}
      </List>
      </Typography>
      <br/>
      <Divider/>
      <br/>
      </Paper>
    </div>
  );
  }
}

StylesSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(
  mapStateToProps,
  undefined
)(withStyles(styles)(StylesSidebar));
