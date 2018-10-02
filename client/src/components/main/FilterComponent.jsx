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
    width: "50em",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  list: {
    display: "flex", 
    justifyContent: "center",
    textAlign: "center",

  },
  match: {
    textAlign: "center",
    marginBottom: "2em"
  }
});

const filterArray = [
  "abstract",
  "acryilic",
  "architechural",
  "art deco",
  "astro",
  "candid",
  "contemporary",
  "country",
  "cubism",
  "digital",
  "ecletic",
  "expressionism",
  "fluid",
  "furniture design",
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
  "mixed media",
  "nature",
  "oil",
  "outdoor",
  "painting",
  "photography",
  "pop",
  "portrait",
  "pet portrait",
  "pop",
  "realism",
  "resin",
  "rustic",
  "sports",
  "spray paint",
  "still life",
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

class FilterComponent extends React.Component {

  handleOnChange = event => {
    console.log(event.target.name)
    this.setState({ 
      [event.target.name]: event.target.value,
     });
  };

  render() {

    const { classes } = this.props;

    return (

      <div>
        <h1 className={classes.header}>Filter</h1>
        <div className={classes.form}>
        <List className={classes.list}>
            {filterArray.map(styles => {
              <ListItem
                className={classes.list}
                value={classes}
                name={classes}
              >
              <Checkbox>
              </Checkbox>
            </ListItem>
            })}
        </List>
          <br />
          <br />
          <button
            className={classes.button}
          >
            Filter
        </button>
        </div>
      </div>
    )
  }
}

FilterComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(undefined, undefined)(withStyles(styles)(FilterComponent))

