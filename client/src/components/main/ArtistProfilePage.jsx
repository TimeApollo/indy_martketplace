import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import StylesSidebar from "./StylesSidebar"
import AboutSidebar from "./AboutSidebar"

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
};

function ArtistProfilePage(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src="/static/images/penny.jpg" className={classes.avatar} />
      <AboutSidebar></AboutSidebar>
      <StylesSidebar></StylesSidebar>

    </div>
  );
}

ArtistProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtistProfilePage);
