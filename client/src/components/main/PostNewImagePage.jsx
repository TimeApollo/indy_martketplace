import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  input: {
    display: "none"
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    minWidth: 120,
  }
});

const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];

class UploadForm extends React.Component {
  state = {
    abstract: false,
    portrait: false,
    contemporary: false,
    medium: '',
    open: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleMedium = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleOpen = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const { classes } = this.props;
    const { abstract, portrait,  contemporary } = this.state
    return (
      <div className={classes.root}>
      <form>
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            />
            <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" className={classes.button}>
              Select File to Upload
            </Button>
            </label>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="medium-simple"> Medium </InputLabel>
        <Select
            value={this.state.medium}
            onChange={this.handleMedium}
            inputProps={{
              name: 'medium',
              id: 'medium-simple',
            }}
          >
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          <MenuItem value={'Painting'}>Painting</MenuItem>
          <MenuItem value={'Sculpture'}>Sculpture</MenuItem>
          <MenuItem value={'Photograph'}>Photograph</MenuItem>
        </Select>
      </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select Styles</FormLabel>
          <FormGroup name="styles">
            <FormControlLabel
                control={
                  <Checkbox checked={abstract} onChange={this.handleChange('abstract')} value="abstract" />
                }
                label="abstract"
                />
            <FormControlLabel
              control={
                <Checkbox checked={portrait} onChange={this.handleChange('portrait')} value="portrait" />
              }
              label="portrait"
              />
            <FormControlLabel
              control={
                <Checkbox checked={contemporary} onChange={this.handleChange('contemporary')} value="contemporary" />
              }
              label="contemporary"
              />
        </FormGroup>      
      </FormControl>
      </form>
      <Button variant="contained" component="span" className={classes.button}>
              Submit Upload
      </Button>
      </div>
    );
  }
}

UploadForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UploadForm);
