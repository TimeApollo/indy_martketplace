import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import image from "../../images/penny.png";

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

//  The example data is structured as follows:
const tileData = [
  {
    img: 'https://artbin.s3.us-east-2.amazonaws.com/5badab25838f13487e4d6924',
    title: "Image",
    author: "author",
    id: 1
  },
  {
    img: 'https://artbin.s3.us-east-2.amazonaws.com/5badab25838f13487e4d6924',
    title: "Image",
    author: "author",
    id: 2
  },
  {
    img: 'https://artbin.s3.us-east-2.amazonaws.com/5badaf68bf47b348ccd3985b',
    title: "Image",
    author: "author",
    id: 3
  },
  {
    img: 'https://artbin.s3.us-east-2.amazonaws.com/5badaecdbf47b348ccd3985a',
    title: "Image",
    author: "author",
    id: 4
  },
  {
    img: image,
    title: "Image",
    author: "author",
    id: 5
  },
  {
    img: image,
    title: "Image",
    author: "author",
    id: 6
  },
  {
    img: image,
    title: "Image",
    author: "author",
    id: 7
  }
];

class SingleGallery extends React.Component {

  componentDidMount(){
     
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={5}>
          {tileData.map(tile => (
            <GridListTile key={tile.id}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
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
          ))}
        </GridList>
      </div>
    );
  }
}

SingleGallery.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleGallery);
