import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllArtists, getOneArtist } from "../../actions/artist";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "20vw",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginRight: "1em",
    marginLeft: "-2em"
  },
  icon: {
    margin: theme.spacing.unit
  },
  link: {
    textAlign: "center",
  }
});

class ArtistListSidebar extends Component {
  componentDidMount() {
    this.props.getAllArtists();
  }

  handleClick = artistId => {
    console.log(artistId);
    this.props.getOneArtist(artistId);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.root} elevation={15}>
          <Typography variant="headline" component="h1">
            ARTISTS
          </Typography>
          <br />
          <Divider />
          <br />
          <div component="p" className={classes.list}>
            Click on Artist To Check Out Their Page!
            <List className={classes.link}>
              {this.props.artists
                ? this.props.artists.map(artist => (
                    <ListItem
                      key={artist._id}
                      dense
                      button
                      onClick={() => this.handleClick(artist._id)}
                      className={classes.listItem}
                    >
                      <ListItemText
                        className={classes.link}
                        primary={`${artist.firstName} ${artist.lastName}`}
                      />
                    </ListItem>
                  ))
                : null}
            </List>
            <Icon />
          </div>
          <br />
          <Divider />
          <br />
        </Paper>
      </div>
    );
  }
}

ArtistListSidebar.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = ({ artist }) => ({
  artists: artist.artists
});

const mapDispatchToProps = dispatch => {
  return {
    getAllArtists: () => {
      dispatch(getAllArtists());
    },
    getOneArtist: userId => {
      dispatch(getOneArtist(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ArtistListSidebar));
