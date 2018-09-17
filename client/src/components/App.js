import React, { Component } from 'react';
import { withRouter , Switch ,Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import RegisterForm from './homepage/RegisterForm.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path='/' component={RegisterForm}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
