import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
    // height: "15em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleLoginUser = event => {
    let loginData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(loginData);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.header}>LOGIN</h1>
        <div className={classes.form}>
          <FormControl required="true" style={{ margin: "1em" }}>
            <InputLabel>Email</InputLabel>
            <Input 
            type="email" 
            name="email" 
            onChange={this.handleOnChange} />
          </FormControl>
          <FormControl required="true" style={{ margin: "1em" }}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              onChange={this.handleOnChange}
            />
          </FormControl>
          <br/>
          <br/>
          <button
          variant="extendedFab"
          className={classes.button}
          onClick={this.handleLoginUser}
        >
          Login
        </button>
        </div>
        {/* <Button
          variant="extendedFab"
          className={classes.button}
          onClick={this.handleLoginUser}
        >
          Login
        </Button> */}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  login: auth.login
});

const mapDispatchToProps = dispatch => {
  return {
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
