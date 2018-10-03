import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import BuyerAboutSidebar from "./BuyerAboutSidebar";
import Gallery from "./Gallery";
import Paper from "@material-ui/core/Paper";

import ImageModal from "../homepage/ImageModal.jsx";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5em"
  },
  sidebar: {
    width: "20",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "3em"
  },
  paper: {
    width: "8em",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "2em",
    marginLeft: "auto",
    marginRight: "auto"
  },
  gallery: {
    marginLeft: "5em"
  }
};

class BuyerProfilePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        { this.props.imgPopup && <ImageModal /> }
        <div className={classes.row}>
          <div className={classes.sidebar}>
            <BuyerAboutSidebar />
          </div>
          <div className={classes.gallery}>
            <Paper elevation={15} className={classes.paper}>
              FAVORITE
            </Paper>
            {this.props.artwork ? <Gallery className={classes.gallery} artworks={this.props.artwork} page={"buyer"}/> : null }
            <br />
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

BuyerProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ art }) => ({
  artwork: art.artwork,
  imgPopup: art.imgPopup
});

export default connect( mapStateToProps , undefined )(withStyles(styles)(BuyerProfilePage));
