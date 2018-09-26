// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import { getOneUser } from "../../actions/user.js";

// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//     width: "15em",
//     fontFamily: "sans-serif",
//     textAlign: "center"
//   }
// });

// class AboutSidebar extends Component {
//   componentDidMount() {
//     this.props.getOneUser();
//   }

//   render() {
//     const { classes } = props;

//     return (
//       <div className={classes.root}>
//         <Paper className={classes.root} elevation={15}>
//           <Typography variant="headline" component="h1">
//             {this.props.firstName} {this.props.lastName}
//           </Typography>
//           <Typography component="h2">
//             Painter, Photographer, Muralist
//           </Typography>

//           <br />
//           <Divider />
//           <br />
//           <Typography component="p">
//             Blurb about the artist, who they are, what they do. Ethereal modern
//             racial identity homogenized deconstruction explore environment.
//             Artifacts progress nature experimental destabilize catalyst
//             existential gentrification. Absence viewpoint plurality universal
//             emotion boundaries tangible. Patriarchy avant-garde intervention
//             spontaneous emanates inventories meta. Appropriate multimedia
//             installation lived experience viewpoint introspection graffiti
//             alternative.
//           </Typography>
//           <br />
//           <Divider />
//           <br />
//         </Paper>
//         <br />
//       </div>
//     );
//   }
// }

// AboutSidebar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// const mapStateToProps = ({ user }) => ({
//   firstName: user.firstName,
//   lastName: user.lastName,
//   about: user.about,
//   mediums: user.mediums,
//   styles: user.styles,
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     getOneUser: userID => {
//       dispatch(getOneUser(userID));
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(AboutSidebar));
