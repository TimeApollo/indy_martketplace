import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import RegisterForm from "./homepage/RegisterForm.jsx";
import LoginForm from "./homepage/LoginForm.jsx";
import {logoutUser} from "../actions/auth"
import {tabChange} from "../actions/tab"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    zIndex: 3,
    width: "35em",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  loginFormStyle: {
    position: "absolute",
    width: "35em",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  registFormStyle: {
    width: "30em",
    margin: "auto"
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class CenteredTabs extends React.Component {
  state = {
    lastValue: null,
    loginOpened: false,
    registerOpen: false,
    email: "",
    password: "",
  };

  handleTabChange = (event, value) => {
    this.props.tabChange(value)
  };
  
  handleLogout = () => {
    this.setState({
      loginOpened: false
    })
    this.props.logoutUser()
  }
  openLogin = () => {
    this.setState({
      loginOpened: true
    });
  };
  closeLogin = () => {
    let value = "/"
    this.props.tabChange(value)
    this.setState({
      loginOpened: false
    });
  };
  handleOpenRegister = () => {
    this.setState({ 
      registerOpen: true,
    });
  };

  handleRegisterClose = () => {
    let value = "/"
    this.props.tabChange(value)
    this.setState({
      registerOpen: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {this.props.loggedIn ? (
            <Slide
              direction="left"
              in={this.props.loggedIn}
              mountOnEnter
              unmountOnExit
            >
              <Tabs
                value={this.props.currentTab}
                onChange={this.handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Homepage" component={Link} to="/" value="/"/>
                <Tab label="Artwork" component={Link} to="/artwork" value="/Artwork"/>
                {this.props.isArtist ? <Tab label="Upload" component={Link} to="/upload" value="/upload"/> : null }
                <Tab label="Messages" component={Link} to="/messages" value="/messages"/>
                <Tab label="Profile" component={Link} to="/profile" value="/profile"/>
                <Tab label="Edit Profile" component={Link} to="/editProfile" />
                <Tab label="About" component={Link} to="/About"/>
                <Tab label="Logout"  component={Link} to="/" onClick={this.handleLogout} />
              </Tabs>
            </Slide>
        ) : (
          <Slide
            direction="left"
            in={this.props.loggedIn === false}
            mountOnEnter
            unmountOnExit
          >
            <Tabs
              value={this.props.currentTab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Homepage" component={Link} to="/" value="/"/>
              <Tab label="Artwork" component={Link} to="/artwork" value="/artwork"/>
                {/* <Tab label="About" component={Link} to="/about" /> */}
              <Tab label="Login" onClick={this.openLogin} value="/login"/>
              {this.state.loginOpened ? (
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.loginOpened}
                  onClose={this.closeLogin}
                >
                  <div style={getModalStyle()} className={classes.loginFormStyle}>
                    <LoginForm />
                  </div>
                </Modal>
              ) : 
                null
              }
              <Tab label="Register" onClick={this.handleOpenRegister} value="/register"/>
              {this.state.registerOpen ? (
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.registerOpen}
                  onClose={this.handleRegisterClose}
                >
                  <div style={getModalStyle()} className={classes.paper}>
                    <RegisterForm />
                  </div>
                </Modal>
              ) : 
                null
              }
            <Tab label="About" component={Link} to="/About"/>
            </Tabs>
          </Slide>
        )}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({auth, tabs}) => {
  return {
    loggedIn: auth.user.isLoggedIn,
    currentTab: tabs.value,
    isArtist: auth.user.isArtist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tabChange: (value) => dispatch(tabChange(value)),
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CenteredTabs));
