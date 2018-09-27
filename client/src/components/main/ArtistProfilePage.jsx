import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import StylesSidebar from "./StylesSidebar";
import AboutSidebar from "./AboutSidebar";
import Gallery from "./Gallery";
import Paper from "@material-ui/core/Paper";

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

class ArtistProfilePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.row}>
        <div className={classes.sidebar}>
          <img
            src={require("../../images/penny.png")}
            alt="penny"
            className={classes.bigAvatar}
          />
          <AboutSidebar />
          <StylesSidebar />
        </div>
        <div className={classes.gallery}>
          <Paper elevation={15} className={classes.paper}>
            FOR SALE
          </Paper>
          <Gallery className={classes.gallery} />
          <br />
          <br />
          <Paper elevation={15} className={classes.paper}>
            SOLD
          </Paper>
          <Gallery className={classes.gallery} />
        </div>
      </div>
    );
  }
}

ArtistProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArtistProfilePage);
