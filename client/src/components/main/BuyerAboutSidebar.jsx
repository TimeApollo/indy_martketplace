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

class BuyerAboutSidebar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={15}>
          <Typography variant="headline" component="h1">
            {this.props.user.firstName} {this.props.user.lastName}
          </Typography>
          <Typography component="h2">{this.props.user.mediums}</Typography>
          <br />
          <Divider />
          <br />
          <Typography component="p">
            {this.props.user.about}
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

BuyerAboutSidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

// const mapDispatchToProps = dispatch => {

// };

export default connect(
  mapStateToProps,
  undefined
)(withStyles(styles)(BuyerAboutSidebar));
