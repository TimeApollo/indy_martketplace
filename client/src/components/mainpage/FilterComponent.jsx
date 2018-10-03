import React from "react";
import { connect } from "react-redux";
import { changeFilteredArray } from "../../actions/art";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1vw",
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
    margin: "0",
    marginTop: "0",
    border: "4px solid black",
    width: "95vw",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
    // flexFlow: "row wrap"
  },
  list: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "black"
  },
  match: {
    textAlign: "center",
    marginBottom: "2em"
  },
  error: {
    textAlign: "center",
    fontSize: ".9em",
    padding: "0"
    // flexFlow: "wrap",
  }
});

const mediumsArray = [
  "FurnitureDesign",
  "MixedMedia",
  "Painting",
  "Photography"
];

const stylesArray = [
  "abstract",
  "acryilic",
  "architectural",
  "art_deco",
  "astro",
  "candid",
  "contemporary",
  "country",
  "cubism",
  "digital",
  "eclectic",
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
  "wood"
];

class FilterComponent extends React.Component {

  state = {
    Furniture_Design:false,
    Mixed_Media:false,
    Painting:false,
    Photography: false,
    abstract: false,
    acryilic: false,
    architechural: false,
    art_deco: false,
    astro: false,
    candid: false,
    contemporary: false,
    country: false,
    cubism: false,
    digital: false,
    ecletic: false,
    expressionism: false,
    fluid: false,
    futurism: false,
    geometric: false,
    impressionism: false,
    industrial: false,
    ink: false,
    landscape: false,
    macro: false,
    metal: false,
    modern: false,
    modernism: false,
    minimalism: false,
    nature: false,
    oil: false,
    outdoor: false,
    pop: false,
    portrait: false,
    pet_portrait: false,
    pop: false,
    realism: false,
    resin: false,
    rustic: false,
    sports: false,
    spray_paint: false,
    still_life: false,
    street: false,
    surrealism: false,
    upcycled: false,
    victorian: false,
    visionary: false,
    watercolor: false,
    wedding: false,
    wildlife: false,
    wood: false,
  }

  handleChange = event => {
    console.log(event.target.name);
    this.setState({[event.target.name]: !this.state[event.target.name]});
  };

  componentDidUpdate(prevProps, prevState){
    if ( prevState !== this.state ){
      let mediums = [] , styles = [];
      mediums = mediumsArray.filter( medium => this.state[medium] === true );
      styles = stylesArray.filter( style => this.state[style] === true )
  
      this.props.changeFilteredArray( mediums , styles )
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.header}>Filter</h1>
        <div className={classes.form}>
            Mediums
          <FormGroup row>
            {mediumsArray.map(medium => (
            <FormControlLabel
              control={
                <Checkbox
                  name={medium}
                  checked={this.state[medium]}
                  onChange={this.handleChange}
                  value={medium}
                />
              }
              label={medium}
              />))}
              <button className={classes.button}>Filter</button>
            <br />
            <br />
          </FormGroup>
           Styles
          <FormGroup row>
            {stylesArray.map(style => (
            <FormControlLabel
              control={
                <Checkbox
                  name={style}
                  checked={this.state[style]}
                  onChange={this.handleChange}
                  value={style}
                />
              }
              label={style}
              />))}
            <br />
            <br />
          </FormGroup>
        </div>
      </div>
    );
  }
}

FilterComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ art }) => ({
  artwork: art.artwork,
  filteredArtwork: art.filteredArtwork,
});

const mapDispatchToProps = dispatch => {
  return {
    changeFilteredArray: ( mediums , styles ) => {
      dispatch(changeFilteredArray( mediums , styles ));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FilterComponent));
