import React, { Component } from "react";
import { connect } from "react-redux";
import { getArtworkAndFiltered } from "../../actions/art";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ArtistListSidebar from "./ArtistListSidebar";
import MainGallery from "../mainpage/MainGallery";
import FilterComponent from "./FilterComponent";

import ImageModal from "../homepage/ImageModal.jsx";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1vw"
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1vw",
  },
  sidebar: {
    width: "33vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    align: "center",
    textAlign: "center",
    marginBottom: "3em"
  },
  gallery: {
    marginLeft: "1vw",
    marginRight: "1vw",
    width: "65vw"
  }
};

class MainPage extends Component {

  componentDidMount(){
    this.props.getArtworkAndFiltered()
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        { this.props.imgPopup && <ImageModal /> }
        <div className={classes.filter}>
          <FilterComponent/>
        </div>
        <div className={classes.row}>
          <div className={classes.sidebar}>
            <ArtistListSidebar />
          </div>
          <div className={classes.gallery}>
            <MainGallery className={classes.gallery} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ art }) => ({
  artwork: art.artwork,
  filteredArtwork: art.filteredArtwork,
  imgPopup: art.imgPopup
});

const mapDispatchToProps = dispatch => {
  return {
    getArtworkAndFiltered: () => {
      dispatch(getArtworkAndFiltered());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));
