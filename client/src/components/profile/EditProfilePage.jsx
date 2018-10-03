import React from "react";
import { connect } from "react-redux";
import { editProfile } from "../../actions/auth";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';;

let mediumsArray = require("./mediumsArray.js");
let stylesArray = require("./stylesArray.js");

//could pull out the styling to make this file shorter but it's not my
//priority right now ¯\_(ツ)_/¯

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-1.5em",
    background: "#1fc8db",
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
    width: "40em",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
    // flexFlow: "row wrap"
  },
  error: {
    textAlign: "center",
    fontSize: ".9em",
    padding: "0"
  },
  match: {
    textAlign: "center",
    marginBottom: "2em"
  },
  title: {
    paddingLeft: "1em",
    paddingTop: "1em",
    fontWeight: "bolder"
  },
  styles: {
    textAlign: "center",
    fontSize: ".9em",
    padding: "0",
    display: "flex",
    flexWrap: "wrap"
  },
  align: {
    width: "10em",
    padding: "0",
    margin: "0"
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
class EditProfilePage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    passwordMatch: "",
    about: "",
    mediums: [],
    styles: [],
    isArtist: this.props.isArtist,
    doesPasswordMatch: false
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

  // profileEditSuccess = () => {
  //   return (
  //     <Paper
  //       style={{
  //         width: "15em",
  //         fontFamily: "sans-serif",
  //         textAlign: "center"
  //       }}
  //       elevation={10}
  //     >
  //       Profile successfully updated!
  //     </Paper>
  //   );
  // };

  handleSubmitProfile = () => {
    let selectedMediums = [];
    this.setState({ doesPasswordMatch: false });
    mediumsArray.forEach(medium => {
      if (this.state[medium]) {
        console.log("here");
        selectedMediums.push(medium);
      }
    });
    let selectedStyles = [];
    stylesArray.forEach(style => {
      if (this.state[style]) {
        selectedStyles.push(style);
      }
    });
    console.log(selectedMediums);
    if (this.state.password) {
      if (this.state.password === this.state.passwordMatch) {
        this.props.editProfile(
          this.state.firstName,
          this.state.lastName,
          this.state.password,
          this.state.about,
          selectedMediums,
          selectedStyles,
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
        selectedMediums,
        selectedStyles,
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
            <Input type="text" name="lastName" onChange={this.handleOnChange} />
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
          <div className={classes.title}> Mediums</div>
          <FormGroup row>
            {mediumsArray.map(mediums => (
              <FormControlLabel
                className={classes.align}
                control={
                  <Checkbox
                    onChange={this.handleOnChange}
                    checked={this.state[mediums]}
                    value={mediums}
                    key={mediums}
                    name={mediums}
                  />
                }
                label={mediums}
              />
            ))}
          </FormGroup>
          <div className={classes.title}> Styles</div>
          <FormGroup row>
            {stylesArray.map(styles => (
              <FormControlLabel
                className={classes.align}
                control={
                  <Checkbox
                    onChange={this.handleOnChange}
                    checked={this.state[styles]}
                    value={styles}
                    key={styles}
                    name={styles}
                  />
                }
                label={styles}
              />
            ))}
          </FormGroup>
          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel style={{textAlign:"center", paddingTop: ".5em"}} component="legend">Want to post your own artwork? Please choose Artist!</FormLabel>
          <RadioGroup
            aria-label="Account"
            name="isArtist"
            className={classes.group}
            value={this.state.isArtist}
            onChange={this.handleChange}
          >
            <FormControlLabel value='true' control={<Radio />} label="Artist" />
            <FormControlLabel value='false' control={<Radio />} label="Art Lover" />
          </RadioGroup>
        </FormControl>
          <br />
          <br />
          <button className={classes.button} onClick={this.handleSubmitProfile}>
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
          <button className={classes.button}>Delete Profile</button>
        </div>
      </div>
    );
  }
}

EditProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return {
    user: auth.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    editProfile: (
      firstName,
      lastName,
      password,
      about,
      mediums,
      styles,
      isArtist,
      userId
    ) => {
      dispatch(
        editProfile(
          firstName,
          lastName,
          password,
          about,
          mediums,
          styles,
          isArtist,
          userId
        )
      );
    }
    // deleteUser: token => {
    //   dispatch(deleteUser(token));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditProfilePage));
