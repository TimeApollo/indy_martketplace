import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {tabChange} from "../../actions/tab";

const styles = theme => ({
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
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  header: {
    marginBottom: "0px",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "1em"
  },
  form: {
    margin: "3em",
    marginTop: "0",
    border: "4px solid black",
    width: "30em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  error: {
    textAlign: "center"
  },
});

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value,
     });
  };

  handleLoginUserEnter = event => {
    if (event.key === "Enter") {
      let loginData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(loginData);
    }
  };

  handleLoginUser = event => {
    let loginData = {
      email: this.state.email,
      password: this.state.password
    };
    let value = "/profile"
    this.props.tabChange(value)
    this.props.loginUser(loginData);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.header}>LOGIN</h1>
        {this.props.login.isLoginFail ? <div className={classes.error}> Email or Password was incorrect. Please try again </div> : null }
        <div className={classes.form}>
          <FormControl required={true} style={{ margin: "1em" }}>
            <InputLabel>Email</InputLabel>
            <Input
              autoFocus="true"
              type="email" 
              name="email" 
              onChange={this.handleOnChange}
              onKeyPress={this.handleLoginUserEnter}
            />
          </FormControl>
          <FormControl required={true} style={{ margin: "1em" }}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              onChange={this.handleOnChange}
              onKeyPress={this.handleLoginUserEnter}
            />
          </FormControl>
          <br />
          <br />
          <button
            className={classes.button}
            onClick={this.handleLoginUser}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  login: auth.login
});

const mapDispatchToProps = dispatch => {
  return {
    tabChange: (value) => dispatch(tabChange(value)),
    loginUser: loginFormData => {
      dispatch(loginUser(loginFormData));
    }
  };
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginForm));
