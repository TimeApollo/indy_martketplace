import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ViewStylesSidebar from "./ViewStylesSidebar";
import ViewArtistAbout from "./ViewArtistAbout";
import ArtistGallery from "./ArtistGallery";
import Paper from "@material-ui/core/Paper";
import { getArtistArtwork } from "../../actions/art";

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

class ViewArtistProfile extends Component {

  componentDidMount = () => {
    this.props.getArtistArtwork(this.props.userId)
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        { this.props.imgPopup && <ImageModal /> }
        <div className={classes.row}>
          <div className={classes.sidebar}>
            <ViewArtistAbout/>
            <ViewStylesSidebar />
          </div>
          <div className={classes.gallery}>
            <Paper elevation={15} className={classes.paper}>
              FOR SALE
            </Paper>
            {this.props.userArtworkSale.length ? <ArtistGallery className={classes.gallery} artworks={this.props.userArtworkSale} /> : null }
            <br />
            <br />
            <Paper elevation={15} className={classes.paper}>
              SOLD
            </Paper>
            {this.props.userArtworkSold.length ? <ArtistGallery className={classes.gallery} artworks={this.props.userArtworkSold}/> : null }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ViewArtistProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ art , artist }) => ({
  userArtworkSale: art.userArtwork.filter( art => art.forSale === true ),
  userArtworkSold: art.userArtwork.filter( art => art.forSale === false ),
  userId: artist.artist.userId,
  imgPopup: art.imgPopup
});

const mapDispatchToProps = dispatch => {
  return {
    getArtistArtwork: (userId) => {
      dispatch(getArtistArtwork(userId));
    }
  };
};

export default connect( mapStateToProps , mapDispatchToProps )(withStyles(styles)(ViewArtistProfile));
