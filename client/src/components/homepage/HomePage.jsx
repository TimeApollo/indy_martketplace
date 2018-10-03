import React, { Component } from "react";
// import { withRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { connect } from 'react-redux';

import SingleGallery from "./SingleGallery.jsx";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ImageModal from "./ImageModal";


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
  },
  button: {
    margin: theme.spacing.unit,
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-2em",
    background: "#1fc8db 51%",
    fontWeight: "bold",
    fontSize: "1.2em",
    color: "white",
    paddingLeft: "1em",
    paddingRight: "1em",
    borderRadius: ".5em",
    border: "white",
    paddingTop: ".3em",
    paddingBottom: ".3em"
  },
  regMsg: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-2em",
  }
});

class HomePage extends Component {
  state = {
    loginCheck: true,
  }

  toggleLoginCheck = () => {
    this.setState({loginCheck: !this.state.loginCheck})
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        { this.props.imgPopup && <ImageModal /> }
        <SingleGallery />
        <Paper className={classes.form}>
          <Typography className={classes.type}>
            Indy mARTketplace connects artists and art
            lovers in the Indianapolis community.
          </Typography>
          <br/>
          <Divider className={classes.divider} />
          <br/>
          <Typography className={classes.type}>
            BUY ART.   SELL ART.   LOVE ART.
          </Typography>
        </Paper>
        {this.state.loginCheck 
          ? <React.Fragment>
              <LoginForm />
              <div>
                <div className={classes.regMsg}>New to Indy mARTketplace? Click here to register!</div>
                <br/>
                <br/>
                <br/>
                <button className={classes.button} onClick={this.toggleLoginCheck}> Register </button>
              </div>
            </React.Fragment>
          : <React.Fragment>
              <RegisterForm />
              <div>
                <div className={classes.regMsg}>Already a member? Click here to login!</div>
                <br/>
                <br/>
                <br/>
                <button className={classes.button} onClick={this.toggleLoginCheck}> Login </button>
              </div>
            </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({art}) => ({
  imgPopup: art.imgPopup
});

export default connect(mapStateToProps, undefined)(withStyles(styles)(HomePage));
