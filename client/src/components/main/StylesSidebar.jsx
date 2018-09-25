import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';

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

function StylesSidebar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.root} elevation={10}>
        <Typography variant="headline" component="h1">
          STYLES
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography component="p">
        <List>
          <li>Acrylic</li>
          <li>Oil</li>
          <li>Watercolor</li>
          <li>Spray Paint</li>
          <li>Abstract</li>
          <li>Cubism</li>
          <li>Geometric</li>
          <li>Landscape</li>
          <li>Nature</li>
          <li>Portrait</li>
          <li>Realism</li>
          <li>Surrealism</li>
          <li>Visionary</li>
      </List>
      </Typography>
      <br/>
      <Divider/>
      <br/>
      </Paper>
    </div>
  );
}

StylesSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StylesSidebar);
