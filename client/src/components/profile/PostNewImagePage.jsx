import React from "react";
import { connect } from "react-redux";
import { submitUpload } from "../../actions/art";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "3em",
    justifyContent: "center",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 280
  },
  button: {
    margin: theme.spacing.unit
  },
  mediumsButton: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  input: {
    display: "none"
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    minWidth: 120
  },
  dense: {
    marginTop: 19
  }
});

const photograpyStyleArr = [
  "abstract",
  "architectural",
  "astro",
  "candid",
  "landscape",
  "macro",
  "nature",
  "portrait",
  "sports",
  "stilllife",
  "street",
  "wedding",
  "wildlife",
];
const paintingStyleArr = [
  "abstract",
  "acryilic",
  "cubism",
  "digital",
  "expressionism",
  "fluid",
  "geometric",
  "impressionism",
  "ink",
  "landscape",
  "modernism",
  "nature",
  "oil",
  "pop",
  "pet portrait",
  "pop",
  "portrait",
  "realism",
  "resin",
  "spraypaint",
  "stilllife",
  "surrealism",
  "visionary",
  "watercolor",
  "wildlife",
];
const furnitureDesignStyleArr = [
  "artdeco",
  "contemporary",
  "country",
  "eclectic",
  "futurism",
  "industrial",
  "metal",
  "modern",
  "minimalism",
  "outdoor",
  "resin",
  "rustic",
  "upcycled",
  "victorian",
  "wood",
];

const MixedMediaStyleArr = [
  "abstract",
  "acryilic",
  "architechural",
  "artdeco",
  "astro",
  "candid",
  "contemporary",
  "country",
  "cubism",
  "digital",
  "ecletic",
  "expressionism",
  "fluid",
  "futurism",
  "geometric",
  "impressionism",
  "industrial",
  "ink",
  "landscape",
  "macro",
  "metal",
  "modern",
  "modernism",
  "minimalism",
  "nature",
  "oil",
  "outdoor",
  "pop",
  "portrait",
  "petportrait",
  "pop",
  "realism",
  "resin",
  "rustic",
  "sports",
  "spraypaint",
  "stilllife",
  "street",
  "surrealism",
  "upcycled",
  "victorian",
  "visionary",
  "watercolor",
  "wedding",
  "wildlife",
  "wood",
]

class UploadForm extends React.Component {
  state = {
    open: false,
    medium: "",
    forSale: "",
    uploadFile: {},
    styles: [],
    title: "",
    uploaded: false,
  };

  handleChange = name => event => {
    this.setState({ styles: [...this.state.styles, event.target.value], uploaded: false });
  };
  handleMedium = event => {
    this.setState({ 
      [event.target.name]: event.target.value, uploaded: false });
  };
  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  handleForSale = event => {
    this.setState({ forSale: event.target.value, uploaded: false });
  };
  handleTitle = event => {
    this.setState({ [event.target.name]: event.target.value, uploaded: false });
  };
  onFileSelect = event => {
    this.setState({ uploadFile: event.target.files[0], uploaded: false });
  };
  onSubmit = () => {
    let uploadFormData = {
      medium: this.state.medium,
      forSale: this.state.forSale,
      file: this.state.uploadFile,
      styles: this.state.styles,
      title: this.state.title,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      email_lower: this.props.email_lower,
      artist: this.props.artist,
      userId: this.props.userId
    };
    this.props.submitUpload(uploadFormData);
    this.setState({
      open: false,
      medium: "",
      forSale: "",
      uploadFile: {},
      styles: [],
      title: "",
      uploaded: true
    })
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <input
          accept="*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={this.onFileSelect}
        />
        <label htmlFor="contained-button-file">
        <React.Fragment>
          {this.state.uploadFile !== {} ? (
            <Typography variant="subheading" gutterBottom>
              {this.state.uploadFile.name}
            </Typography>
          ) : null}
        </React.Fragment>
          <Button
            variant="contained"
            component="span"
            className={classes.button}
          >
            Select File to Upload
          </Button>
        </label>
        <TextField
          id="standard-dense"
          label="Title"
          name="title"
          className={classNames(classes.textField, classes.dense)}
          value={this.state.title}
          margin="dense"
          onChange={this.handleTitle}
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="medium-simple"> Medium </InputLabel>
          <Select
            value={this.state.medium}
            onChange={this.handleMedium}
            inputProps={{
              name: "medium",
              id: "medium-simple"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Photography"}>Photography</MenuItem>
            <MenuItem value={"Painting"}>Painting</MenuItem>
            <MenuItem value={"FurnitureDesign"}>Furniture Design</MenuItem>
            <MenuItem value={"MixedMedia"}>Mixed Media</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select Styles</FormLabel>
          {this.state.medium === "Photography"
            ? photograpyStyleArr.map(style => {
                return (
                  <React.Fragment key={style}>
                    <FormGroup name="styles">
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange({ style })}
                            value={style}
                          />
                        }
                        label={style}
                      />
                    </FormGroup>
                  </React.Fragment>
                );
              })
            : null}
          {this.state.medium === "Painting"
            ? paintingStyleArr.map(style => {
                return (
                  <React.Fragment key={style}>
                    <FormGroup name="styles">
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange({ style })}
                            value={style}
                          />
                        }
                        label={style}
                      />
                    </FormGroup>
                  </React.Fragment>
                );
              })
            : null}
          {this.state.medium === "FurnitureDesign"
            ? furnitureDesignStyleArr.map(style => {
                return (
                  <React.Fragment key={style}>
                    <FormGroup name="styles">
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange({ style })}
                            value={style}
                          />
                        }
                        label={style}
                      />
                    </FormGroup>
                  </React.Fragment>
                );
              })
            : null}
                      {this.state.medium === "MixedMedia"
            ? MixedMediaStyleArr.map(style => {
                return (
                  <React.Fragment key={style}>
                    <FormGroup name="styles">
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={this.handleChange({ style })}
                            value={style}
                          />
                        }
                        label={style}
                      />
                    </FormGroup>
                  </React.Fragment>
                );
              })
            : null}
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">For Sale?</FormLabel>
          <RadioGroup
            aria-label="For Sale?"
            name="forSale"
            className={classes.group}
            value={this.state.forSale}
            onChange={this.handleForSale}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          component="span"
          className={classes.button}
          onClick={this.onSubmit}
        >
          Submit Upload
        </Button>
        <React.Fragment>
          {this.state.uploaded ? (
            <Typography variant="subheading" gutterBottom>
              Artwork Uploaded!
            </Typography>
          ) : null}
        </React.Fragment>
      </div>
    );
  }
}

UploadForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => {
  return {
    firstName: auth.user.firstName,
    lastName: auth.user.lastName,
    email: auth.user.email,
    email_lower: auth.user.email_lower,
    artist: `${auth.user.firstName} ${auth.user.lastName}`,
    userId: auth.user.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitUpload: uploadFormData => {
      dispatch(submitUpload(uploadFormData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UploadForm));
