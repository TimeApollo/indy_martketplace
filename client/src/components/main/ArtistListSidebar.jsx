import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "15em",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  icon: {
    margin: theme.spacing.unit,
  },
});

class ArtistListSidebar extends Component {
  render() {

  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Paper className={classes.root} elevation={15}>
        <Typography variant="headline" component="h1">
          ARTISTS
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography component="p">
        <List>
      </List>
      <Icon/>
      </Typography>
      <br/>
      <Divider/>
      <br/>
      </Paper>
    </div>
  );
  }
}

ArtistListSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ users }) => ({
  users
});

export default connect(
  mapStateToProps,
  undefined
)(withStyles(styles)(ArtistListSidebar));
