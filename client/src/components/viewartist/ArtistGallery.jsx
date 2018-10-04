import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";


import { createImgPopup } from "../../actions/art";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridListArtist: {
    width: "55vw",
    height: "45em"
  },
  gridList: {
    width: "55vw",
    height: "45vh"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class ArtistGallery extends Component {
  state = {
    open: false,
  };

  handleSingleImage = (id) => (event) => {
    const result = this.props.artworks.filter(piece => id === piece._id)

    this.props.createImgPopup(result[0])
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cols={6} className={ this.props.page === "buyer" ? classes.gridList : classes.gridListArtist}>
          {this.props.artworks ? this.props.artworks.map(art => (
            <GridListTile key={art._id}>
              <img src={art.url} alt={art.title} onClick={this.handleSingleImage(art._id)} />
              <GridListTileBar
                style={{height: "2.5em"}}
                title={art.title}
                subtitle={<span>by: {art.artist}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          )) : null }
        </GridList>
      </div>
    );
  }
}

ArtistGallery.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    createImgPopup: singleArt => dispatch(createImgPopup(singleArt))
  };
};

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(ArtistGallery));