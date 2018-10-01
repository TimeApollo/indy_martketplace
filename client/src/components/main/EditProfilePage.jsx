import React from "react";
import { connect } from "react-redux";
// import { editProfile, deleteUser } from "../../actions/auth";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
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

class EditProfilePage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    passwordMatch: "",
    about: "",
    mediums: "",
    styles: "",
    doesPasswordMatch: false
  };

  handleDeleteUser = event => {
    this.props.deleteUser(this.props.token);
  };

  passwordMismatch = () => {
    return (
      <Paper
        style={{
          width: "15em",
          fontFamily: "sans-serif",
          textAlign: "center"
        }}
        elevation={10}
      >
        Passwords don't match, buddy!
      </Paper>
    );
  };

  profileEditSuccess = () => {
    return (
      <Paper
        style={{
          width: "15em",
          fontFamily: "sans-serif",
          textAlign: "center"
        }}
        elevation={10}
      >
        Profile successfully updated!
      </Paper>
    );
  };

  handleSubmitProfile = () => {
    this.setState({ doesPasswordMatch: false });
    if (this.state.password) {
      if (this.state.password === this.state.passwordMatch) {
        this.props.editProfile(
          this.state.password,
          this.state.firstName,
          this.state.lastName,
          this.state.about,
          this.state.mediums,
          this.state.styles
        );
      } else {
        this.setState({ doesPasswordMatch: true });
      }
    } else if (
      this.state.about ||
      this.state.firstName ||
      this.state.lastName ||
      this.state.mediums ||
      this.state.styles
    ) {
      this.props.editProfile(
        this.state.password,
        this.state.firstName,
        this.state.lastName,
        this.state.about,
        this.state.mediums,
        this.state.styles
      );
    }
  };

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.header}>Edit Profile</h1>
        <div className={classes.form}>
          <FormControl style={{ margin: "1em" }} required={true}>
            <InputLabel>First Name</InputLabel>
            <Input type="text" name="firstName" />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Last Name</InputLabel>
            <Input type="text" name="lastName" />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Email</InputLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Password</InputLabel>
            <Input type="password" name="password" />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Verify Password</InputLabel>
            <Input type="password" name="passwordMatch" />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>About</InputLabel>
            <Input type="text" name="about" inputMultiline="true" />
          </FormControl>
          <br />
          <br />
          <button
            variant="extendedFab"
            className={classes.button}
            onClick={this.editProfile}
          >
            Update Profile
          </button>
        </div>
      </div>
    );
  }
}

// EditProfilePage.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     token: state.auth.token,
//     isEditing: state.isPasswordUpdated
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     editProfile: (
//       password,
//       token,
//       firstName,
//       lastName,
//       about,
//       mediums,
//       styles
//     ) => {
//       dispatch(
//         editProfile(
//           password,
//           token,
//           firstName,
//           lastName,
//           about,
//           mediums,
//           styles
//         )
//       );
//     },
//     deleteUser: token => {
//       dispatch(deleteUser(token));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(EditProfilePage));
