import React from "react";
import { connect } from "react-redux";
import { getOneArtist } from "../../actions/artist";
import { exitImgPopup } from "../../actions/art";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import "./style.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "25vw",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginRight: "3em"
  },
  icon: {
    margin: theme.spacing.unit
  },
  link: {
    textAlign: "center",
    color: "white"
  },
  image: {
    width: "100%",
    height: "100%"
  },
});

class ImageModal extends React.Component {
  render() {
    const { classes } = this.props;
    const artwork = this.props.artwork;

    return (
      <div className="img-popup" onClick={() => this.props.exitImgPopup()}>
        <div className="img-wrap">
          <div className="img-date">
            <div className="date">{artwork.date}</div>
            <div className="image-div">
              <img src={artwork.url} alt={artwork.title} className="image" />
            </div>
          </div>
          <div className="info-wrap">
            <div className="art-info">
              <div className="name">
                <div className="art-name">{artwork.title}</div>
                <div className="artist">
                  <List>
                    <ListItem
                      key={artwork._id}
                      dense
                      button
                      onClick={() =>
                        this.props.getOneArtist(this.props.artwork.userId)
                      }
                    >
                      <ListItemText
                        style={{
                          marginLeft: "11em",
                          color: "white", 
                          width: "25em"
                      }}
                      ><p style={{color: "white", alignContent: "left", marginLeft: "2em"}}>{artwork.artist} <br/> (Click to go to Artist Profile Page)</p></ListItemText>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ImageModal.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ art, artist }) => ({
  artwork: art.singleArt
});

const mapDispatchToProps = dispatch => {
  return {
    exitImgPopup: () => dispatch(exitImgPopup()),
    getOneArtist: userId => {
      dispatch(getOneArtist(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ImageModal));
