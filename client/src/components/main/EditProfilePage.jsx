import React from "react";
import { connect } from "react-redux";
import { editProfile } from "../../actions/auth";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


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
    isArtist: this.props.isArtist,
    doesPasswordMatch: false
  };

  // handleDeleteUser = event => {
  //   this.props.deleteUser(this.props.token);
  // };

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
          this.state.firstName,
          this.state.lastName,
          this.state.password,
          this.state.about,
          this.state.mediums,
          this.state.styles, 
          this.state.isArtist,
          this.props.user.userId
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
        this.state.firstName,
        this.state.lastName,
        this.state.password,
        this.state.about,
        this.state.mediums,
        this.state.styles,
        this.state.isArtist,
        this.props.user.userId
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
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>First Name</InputLabel>
            <Input 
            type="text" 
            name="firstName"
            onChange={this.handleOnChange}
             />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Last Name</InputLabel>
            <Input 
            type="text" 
            name="lastName"
            onChange={this.handleOnChange}
             />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Password</InputLabel>
            <Input 
            type="password" 
            name="password" 
            onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Verify Password</InputLabel>
            <Input 
            type="password" 
            name="passwordMatch" 
            onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>About</InputLabel>
            <Input 
            type="text" 
            name="about" 
            multiline={true} 
            onChange={this.handleOnChange}            
            />
          </FormControl>
          Mediums
          <List className={classes.error}>
            <ListItem className={classes.error}>
              Painting
              <Checkbox>
              </Checkbox>
            </ListItem>
          </List>
          <br />
          <br />
          <button
            variant="extendedFab"
            className={classes.button}
            onClick={this.handleSubmitProfile}
          >
            Update Profile
          </button>
        </div>
        <h1 className={classes.header}>Delete Profile</h1>
        <div className={classes.form}>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Password</InputLabel>
            <Input 
            type="password" 
            name="password" 
            onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Verify Password</InputLabel>
            <Input 
            type="password" 
            name="passwordMatch" 
            onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl style={{ margin: "1em" }}>
            <InputLabel>Tell us why you're leaving...</InputLabel>
            <Input 
            type="text" 
            name="about" 
            multiline={true} 
            onChange={this.handleOnChange}            
            />
          </FormControl>
          <br />
          <br />
          <button
            variant="extendedFab"
            className={classes.button}
          >
            Delete Profile
          </button>
        </div>
      </div>
    );
  }
}

EditProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({auth}) {
  return {
    user: auth.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    editProfile: (firstName, lastName, password, about, mediums, styles, isArtist, userId) => {
      dispatch(
        editProfile(firstName, lastName, password, about, mediums, styles, isArtist, userId)
      );
    },
    // deleteUser: token => {
    //   dispatch(deleteUser(token));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditProfilePage));
