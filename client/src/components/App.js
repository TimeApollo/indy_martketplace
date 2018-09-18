import React, { Component } from 'react';
import { withRouter , Switch ,Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import RegisterForm from './homepage/RegisterForm.jsx';
import MessageList from './message_field/MessageList.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path='/' component={RegisterForm}/>
          {/* <Route exact path='/' component={NavBar}/> */}
          <Route exact path='/messages' component={MessageList}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
