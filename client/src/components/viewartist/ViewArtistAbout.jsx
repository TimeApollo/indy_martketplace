import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "15em",
    fontFamily: "sans-serif",
    textAlign: "center"
  }
});

class ViewArtistAbout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={15}>
          <Typography variant="headline" component="h1">
            {this.props.artist.firstName} {this.props.artist.lastName}
          </Typography>
          <Typography component="h2">{this.props.artist.mediums.join(", ")}</Typography>
          <br />
          <Divider />
          <br />
          <Typography component="p">
            {this.props.artist.about}
          </Typography>
          <br />
          <Divider />
          <br />
        </Paper>
        <br />
      </div>
    );
  }
}

ViewArtistAbout.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ artist }) => ({
  artist: artist.artist
});

// const mapDispatchToProps = dispatch => {

// };

export default connect(
  mapStateToProps,
  undefined
)(withStyles(styles)(ViewArtistAbout));
