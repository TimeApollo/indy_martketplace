import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from 'react-redux';

const styles = theme => ({
  form: {
    marginBottom: "0",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2em",
    paddingBottom: "2em",
    background: "linear-gradient(141deg, #9fb8ad 10%, #1fc8db 59%, #2cb5e8 75%)",
  },
  divider: {
    width: "20em",
    marginLeft: "auto",
    marginRight: "auto",
    background: "dark blue",
  },
  type: {
    color: "white", 
    fontWeight: "bold",
    fontSize: "1.5em",
    width: "25em",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    whiteSpace: "pre-wrap",
  }
});

class AboutPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.form}>
          <Typography className={classes.type}>
            BUY ART.   SELL ART.   LOVE ART.
          </Typography>
          <br/>
          <Divider className={classes.divider} />
          <br/>
          <Typography className={classes.type}>
          <p>One of the biggest problems artists face is to connect with buyers; most artists have to rely on building a network of customers and word of mouth referrals.  For many, it is impractical or impossible to ship a piece, which can sometimes more than double the cost to the buyer.  Traditionally, artists display their works in galleries, however they can be required to pay 50-75% as commission to the gallery.  So many options to promote work or connect with buyers is simply too cost prohibitive.  Artists need a way to connect with local buyers without doubling the cost to the buyer or forfeiting the majority of their sale. </p>
          <p>Furthermore, local art lovers need a permanent place to connect with and support the local art community.  Gallery shows are limited in scope, imperamenent, and expensive. </p>
          <p>Indy mARTketplace is a locally focused website that allows artists and art lovers to connect.  Artists can create profiles to showcase their works and services.  Buyers can browse local art and connect with their favorite artists.  We cut out the middleman and connect you directly.
          </p>
          </Typography>
        </Paper>
      <React.Fragment>
    )
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired
};


export default connect(undefined, undefined)(withStyles(styles)(AboutPage));
