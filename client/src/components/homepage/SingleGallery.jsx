import React from "react";
import { connect } from "react-redux";
import { getArtwork, createImgPopup } from "../../actions/art";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

class SingleGallery extends React.Component {
  handleSingleImage = (id) => (event) => {
    const result = this.props.artwork.filter(piece => id === piece._id)

    console.log("filtered arpieces result: ", result[0])
    this.props.createImgPopup(result[0])
  }

  componentDidMount(){
     this.props.getArtwork()
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={8}>
          {this.props.artwork.length ? this.props.artwork.map(piece => (
            <GridListTile key={piece._id}>
              <img src={piece.url} alt={piece.title} onClick={this.handleSingleImage(piece._id)}/>
              <GridListTileBar
                title={piece.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                actionIcon={
                  <IconButton>
                    <StarBorderIcon className={classes.title} />
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

const mapStateToProps = ({ art }) => ({
  artwork: art.artwork
});

const mapDispatchToProps = dispatch => {
  return {
    getArtwork: () => {
      dispatch(getArtwork());
    },
    createImgPopup: singleArt => dispatch(createImgPopup(singleArt))
  };
};

SingleGallery.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SingleGallery));
