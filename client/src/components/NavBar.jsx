import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import RegisterForm from "./homepage/RegisterForm.jsx";
import LoginForm from "./homepage/LoginForm.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
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
    value: 0,
    lastValue: null,
    loggedIn: true,
    loginOpened: false,
    registerOpen: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
  handleLogout = () => {

  }
  openLogin = () => {
    this.setState({
      lastValue: this.state.value,
      loginOpened: true
    });
  };
  closeLogin = () => {
    this.setState({
      value: this.state.lastValue,
      loginOpened: false
    });
  };
  handleOpenRegister = () => {
    this.setState({ registerOpen: true });
  };

  handleRegisterClose = () => {
    this.setState({
      registerOpen: false,
      value: this.state.lastValue
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.loggedIn ? (
          <div>
            <Slide
              direction="left"
              in={this.state.loggedIn}
              mountOnEnter
              unmountOnExit
            >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Homepage" component={Link} to="/" />
                <Tab label="Upload" component={Link} to="/upload" />
                <Tab label="Messages" component={Link} to="/messages" />
                <Tab label="Profile" component={Link} to="/profile" />
                <Tab label="Logout" onClick={this.handleLogout} />
              </Tabs>
            </Slide>
          </div>
        ) : (
          <Slide
            direction="left"
            in={this.state.loggedIn === false}
            mountOnEnter
            unmountOnExit
          >
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Homepage" component={Link} to="/" />
              <Tab label="Login" onClick={this.openLogin} />
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
              <Tab label="Register" onClick={this.handleOpenRegister} />
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

const mapStateToProps = state => {
  return {
    loggedIn: state.user.isLoggedIn
  }
}

const mapDispatchToProps = state => {
  return {
    
  }
}

export default withStyles(styles)(CenteredTabs);
