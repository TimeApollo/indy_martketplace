import React, { Component } from 'react';
import { withRouter , Switch ,Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path='/' component={NavBar}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
