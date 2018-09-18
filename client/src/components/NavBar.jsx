import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slide from '@material-ui/core/Slide';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
    loggedIn: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleLogin = event => {
    this.setState({loggedIn: !this.state.loggedIn})
  }
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
      {this.state.loggedIn ? (
        <div>
        <Slide direction="left" in={this.state.loggedIn} mountOnEnter unmountOnExit>
            <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          >
            <Tab label="Homepage" component={Link} to="/"/>
            <Tab label="Upload" component={Link} to="/upload"/>
            <Tab label="Messages" component={Link} to="/messages"/>
            <Tab label="Profile" component={Link} to="/profile"/>
            <Tab label="Logout" onClick={this.handleLogin}/>
            </Tabs>
          </Slide>
          </div>
          ) : (
        <Slide direction="left" in={this.state.loggedIn === false} mountOnEnter unmountOnExit>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Homepage" component={Link} to="/"/>
          <Tab label="Login" onClick={this.handleLogin}/>
        </Tabs>
        </Slide>
          )}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);