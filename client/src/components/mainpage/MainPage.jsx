import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ArtistListSidebar from "../profile/ArtistListSidebar";
import Gallery from "../profile/Gallery";
import FilterComponent from "../profile/FilterComponent"

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
            <Gallery className={classes.gallery} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPage);
