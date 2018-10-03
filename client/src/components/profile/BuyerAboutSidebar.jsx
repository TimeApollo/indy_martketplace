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
  },
  bigAvatar: {
    border: "1px solid",
    borderColor: "rgb(65, 118, 115)",
    backgroundColor: "rgb(0, 169, 160)",
    borderRadius: "8em",
    width: "10em",
    height: "10em",
    marginRight: "auto",
    display: "flex",
    marginLeft: "auto"
  },
});

class BuyerAboutSidebar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={15}>
        <img
              src={require("../../images/penny.png")}
              alt="penny"
              className={classes.bigAvatar}
            />
            <br/>
          <Typography variant="headline" component="h1">
            {this.props.user.firstName} {this.props.user.lastName}
          </Typography>
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
