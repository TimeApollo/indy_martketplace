import React, { Component } from 'react';
import { withRouter , Switch ,Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import RegisterForm from './homepage/RegisterForm.jsx';
import MessageList from './messages/MessageList.jsx';
import HomePage from './homepage/HomePage.jsx'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <Switch >
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/messages' component={MessageList}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
