import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import image from "../../images/penny.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "40em",
    height: "40em"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
});


const tileData = [
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },
  {
    img: image,
    title: "Image",
    author: "author"
  },

];

class Gallery extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cols={3} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Gallery);
