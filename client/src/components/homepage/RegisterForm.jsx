import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
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
  },
  error: {
    textAlign: "center"
  },
  match: {
    textAlign: "center",
    marginBottom: "2em"
  }
});

class RegisterForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    passwordMatch: "",
    email: "",
    submit: true,
    errorfirstName: false,
    errorlastName: false,
    errorpassword: false,
    errorpasswordMatch: false,
    erroremail: false,
    isPasswordMatch: true
  };

  handleChange = event => {
    let errorname = `error${[event.target.name]}`
    console.log(errorname)
    this.setState({ [event.target.name]: event.target.value , submit: true , [errorname]: false });
  };

  handleRegisterUser = () => {
  
    if ( !this.state.firstName ){ this.setState({ submit: false , errorFirstName: true })}
    if ( !this.state.lastName ){ this.setState({ submit: false , errorLastName: true })}
    if ( !this.state.password ){ this.setState({ submit: false , errorPassword: true })}
    if ( !this.state.passwordMatch ){ this.setState({ submit: false , errorPasswordMatch: true })}
    if ( !this.state.email ){ this.setState({ submit: false , errorEmail: true })}
    if ( this.state.password !== this.state.passwordMatch ){ 
      this.setState({ submit: false , isPasswordMatch: false })
    }
    
    let regFormData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email
    };
    if ( this.state.submit ){
      this.props.registerUser(regFormData);
    } 
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        { this.state.submit ? null : <div className={classes.error}> Error with Submission. Please Correct Entries. </div>}
        <h1 className={classes.header}>
          REGISTER
        </h1>
        <div className={classes.form}>
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>First Name</InputLabel>
            <Input 
              type="text" 
              name="firstName"
              value={this.state.firstName} 
              onChange={this.handleChange} 
              required={true}
            />
          </FormControl>
          { this.state.errorFirstName ? <div className={classes.error}>Please Enter First Name</div> : null }
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>Last Name</InputLabel>
            <Input 
              type="text" 
              name="lastName"
              value={this.state.lastName} 
              onChange={this.handleChange} 
              required={true}
            />
          </FormControl>
          { this.state.errorLastName ? <div className={classes.error}>Please Enter Last Name</div> : null }
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>Email</InputLabel>
            <Input 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={this.handleChange}
              required={true} 
            />
          </FormControl>
          { this.state.errorEmail ? <div className={classes.error}>Please Enter Email</div> : null }
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required={true}
            />
          </FormControl>
          { this.state.errorPassword ? <div className={classes.error}>Please Enter Password</div> : null }
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>Verify Password</InputLabel>
            <Input
              type="password"
              name="passwordMatch"
              value={this.state.passwordMatch}
              onChange={this.handleChange}
              required={true}
            />
          </FormControl>
          { this.state.errorPasswordMatch ? <div className={classes.match}>Please Enter Password</div> : null }
          { this.state.isPasswordMatch ? null : <div className={classes.match}>Please Enter Matching Passwords</div>}
          <br/>
          <br/>
          <button
          variant="extendedFab"
          className={classes.button}
          onClick={this.handleRegisterUser}
        >
          Register
        </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  register: auth.register
});

const mapDispatchToProps = dispatch => {
  return {
    registerUser: regFormData => {
      dispatch(registerUser(regFormData));
    }
  };
};

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RegisterForm));
