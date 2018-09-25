import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "15em",
    fontFamily: "sans-serif",
    textAlign: "center",
  }
});

function AboutSidebar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.root} elevation={15}>
        <Typography variant="headline" component="h1">
        ARTIST NAME
        </Typography>
        <Typography component="h2">
          Painter, Photographer, Muralist
        </Typography>

        <br/>
        <Divider/>
        <br/>
        <Typography component="p">
          Blurb about the artist, who they are, what they do.
          Ethereal modern racial identity homogenized deconstruction explore environment. 
          Artifacts progress nature experimental destabilize catalyst existential gentrification. 
          Absence viewpoint plurality universal emotion boundaries tangible. 
          Patriarchy avant-garde intervention spontaneous emanates inventories meta. 
          Appropriate multimedia installation lived experience viewpoint introspection graffiti alternative.
        </Typography>
        <br/>
        <Divider/>
        <br/>
      </Paper>
      <br/>
    </div>
  );
}

AboutSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutSidebar);
