import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  },
  formControl: {
    margin: "1em",
  },
  group: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "nowrap",
    width: "auto",
    height: "auto",
    justifyContent: "space-around",
  },
});

class RegisterForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    passwordMatch: "",
    email: "",
    isArtist: 'true',
    submit: true,
    errorfirstName: false,
    errorlastName: false,
    errorpassword: false,
    errorpasswordLength: false,
    errorpasswordMatch: false,
    erroremail: false,
    isPasswordMatch: true
  };

  handleChange = event => {
    if (!this.state.isPasswordMatch){
      this.setState({ [event.target.name]: event.target.value , submit: true , isPasswordMatch: true });
    } else if ( this.state.errorpasswordLength ) {
      this.setState({ [event.target.name]: event.target.value , submit: true , errorpasswordLength: false })
    } else {
      let errorname = `error${event.target.name}`
      this.setState({ [event.target.name]: event.target.value , submit: true , [errorname]: false });
    }
  };

  handleEnterKey = event => {
    if (event.key === "Enter") {
      this.handleRegisterUser();
    }
  };

  handleRegisterUser = () => {
    let regFormData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
      isArtist: (this.state.isArtist === 'true' ? true : false )
    };
  
    if ( !this.state.firstName ){ this.setState({ submit: false , errorfirstName: true })}
    else if ( !this.state.lastName ){ this.setState({ submit: false , errorlastName: true })}
    else if ( !this.state.email ){ this.setState({ submit: false , erroremail: true })}
    else if ( !this.state.password ){ this.setState({ submit: false , errorpassword: true })}
    else if ( this.state.password.length < 5 ){ this.setState({ submit: false , errorpasswordLength: true })}
    else if ( !this.state.passwordMatch ){ this.setState({ submit: false , errorpasswordMatch: true })}
    else if ( this.state.password !== this.state.passwordMatch ){ 
      this.setState({ submit: false , isPasswordMatch: false })
    } else {
      this.props.registerUser(regFormData);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        { this.state.submit ? null : <div className={classes.error}> Error with Submission. Please Correct Entry. </div>}
        { this.props.register.error ? <div className={classes.error}> {this.props.register.errorMessage} </div> : null }
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
              onKeyPress={this.handleEnterKey}
            />
          </FormControl>
          { this.state.errorfirstName ? <div className={classes.error}>Please Enter First Name</div> : null }
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>Last Name</InputLabel>
            <Input 
              type="text" 
              name="lastName"
              value={this.state.lastName} 
              onChange={this.handleChange} 
              required={true}
              onKeyPress={this.handleEnterKey}
            />
          </FormControl>
          { this.state.errorlastName ? <div className={classes.error}>Please Enter Last Name</div> : null }
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>Email</InputLabel>
            <Input 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={this.handleChange}
              required={true}
              onKeyPress={this.handleEnterKey}
            />
          </FormControl>
          { this.state.erroremail ? <div className={classes.error}>Please Enter Email</div> : null }
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
          { this.state.errorpassword ? <div className={classes.error}>Please Enter Password</div> : null }
          { this.state.errorpasswordLength ? <div className={classes.error}>Password Must be Minimum of 5 Characters</div> : null }
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>Verify Password</InputLabel>
            <Input
              type="password"
              name="passwordMatch"
              value={this.state.passwordMatch}
              onChange={this.handleChange}
              required={true}
              onKeyPress={this.handleEnterKey}
            />
          </FormControl>
          { this.state.errorpasswordMatch ? <div className={classes.match}>Please Enter Password</div> : null }
          { this.state.isPasswordMatch ? null : <div className={classes.match}>Please Enter Matching Passwords</div>}
          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Account Type (Posting own artwork? Please click Artist!)</FormLabel>
          <RadioGroup
            aria-label="Account"
            name="isArtist"
            className={classes.group}
            value={this.state.isArtist}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterKey}
          >
            <FormControlLabel value='true' control={<Radio />} label="Artist" />
            <FormControlLabel value='false' control={<Radio />} label="Art Lover" />
          </RadioGroup>
        </FormControl>
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
