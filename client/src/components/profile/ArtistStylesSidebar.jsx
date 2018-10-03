import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "20em",
    fontFamily: "sans-serif",
    textAlign: "center"
  },
  edit: {
    color: "gray"
  }
});

class ArtistStylesSidebar extends Component {
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
          {this.props.user.styles.map(style => (
            <List>{style}</List>
          ))}
          <br />
          <Divider />
          <br />
        </Paper>
      </div>
    );
  }
}

ArtistStylesSidebar.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(
  mapStateToProps,
  undefined
)(withStyles(styles)(ArtistStylesSidebar));
