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
import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  }
});

const photograpyStyleArr = [
  "portrait",
  "wedding",
  "abstract",
  "landscape",
  "candid/street",
  "wildlife",
  "nature",
  "still life",
  "architechural",
  "astro",
  "macro",
  "sports"
];
const paintingStyleArr = [
  "abstract",
  "realism",
  "pop",
  "surrealism",
  "visionary",
  "modernism",
  "impressionism",
  "expressionism",
  "cubism",
  "oil",
  "acryilic",
  "fluid",
  "watercolor",
  "pastel",
  "ink",
  "spray paint",
  "digital",
  "landscape",
  "nature",
  "wildlife",
  "still life",
  "resin",
  "geometric",
  "pet portrait"
];
const furnitureDesignStyleArr = [
  "modern",
  "minimalism",
  "art deco",
  "contemporary",
  "rustic",
  "ecletic",
  "industrial",
  "country",
  "upcycled",
  "outdoor",
  "wood",
  "metal",
  "resin",
  "victorian",
  "futurism"
];

class UploadForm extends React.Component {
  state = {
    open: false,
    medium: "",
    forSale: "",
    uploadFile: {},
    styles: [],
    title: ""
  };

  handleChange = name => event => {
    console.log(this.state.styles)
    this.setState({ styles: [...this.state.styles, event.target.value] });
  };
  handleMedium = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  handleForSale = event => {
    this.setState({ forSale: event.target.value });
  };
  handleTitle = event => {
    this.setState({ [event.target.name]: event.target.value})
  }
  onFileSelect = event => {
    console.log(event.target.files[0]);
    this.setState({ uploadFile: event.target.files[0] });
  };
  onSubmit = () => {
    let uploadFormData = {
      medium: this.state.medium,
      forSale: this.state.forSale,
      uploadFile: this.state.uploadFile,
      styles: this.state.styles,
      title: this.state.title
    }
    this.props.submitUpload(uploadFormData)
    console.log(uploadFormData)
  }
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
            <Button
              variant="contained"
              component="span"
              className={classes.button}
            >
              Select File to Upload
            </Button>
          </label>
          <React.Fragment>
            {this.state.uploadFile != {} ? (
              <Typography variant="subheading" gutterBottom>
                {this.state.uploadFile.name}
              </Typography>
            ) : null}
          </React.Fragment>
          <TextField
            id="standard-dense"
            label="Title"
            name="title"
            className={classNames(classes.textField, classes.dense)}
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
              <MenuItem value={"FurnatureDesign"}>Furnature Design</MenuItem>
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
            {this.state.medium === "FurnatureDesign"
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
        <Button variant="contained" component="span" className={classes.button} onClick={this.onSubmit}>
          Submit Upload
        </Button>
      </div>
    );
  }
}

UploadForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    submitUpload: uploadFormData => {
      dispatch(submitUpload(uploadFormData))
    }
  }
}

export default withStyles(styles)(UploadForm);
