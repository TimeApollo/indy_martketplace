import React, { Component } from "react";
import { connect } from "react-redux";
import { getArtworkAndFiltered } from "../../actions/art";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ArtistListSidebar from "../profile/ArtistListSidebar";
import MainGallery from "../mainpage/MainGallery";
import FilterComponent from "./FilterComponent"

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5em"
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
    marginLeft: "5.5em"
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

class MainPage extends Component {

  componentDidMount(){
    this.props.getArtworkAndFiltered()
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.row}>
          <div className={classes.sidebar}>
            <FilterComponent/>
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
});

const mapDispatchToProps = dispatch => {
  return {
    getArtworkAndFiltered: () => {
      dispatch(getArtworkAndFiltered());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));
