import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import image from "../../images/penny.png";
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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
];

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
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class Gallery extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // singleImageModal = () => {
  //   return (
  //     <div>
  //       <Typography gutterBottom>Click to get the full Modal experience!</Typography>
  //       <Button onClick={this.handleOpen}>Open Modal</Button>
  //       <Modal
  //         aria-labelledby="simple-modal-title"
  //         aria-describedby="simple-modal-description"
  //         open={this.state.open}
  //         onClose={this.handleClose}
  //       >
  //         <div style={getModalStyle()} className={classes.paper}>
  //           <Typography variant="title" id="modal-title">
  //             Text in a modal
  //           </Typography>
  //           <Typography variant="subheading" id="simple-modal-description">
  //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //           </Typography>
  //           <SimpleModalWrapped />
  //         </div>
  //       </Modal>
  //     </div>
  //   );
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cols={3} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={Math.random()}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                style={{height: "2.5em"}}
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
