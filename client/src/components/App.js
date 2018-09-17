import React, { Component } from 'react';
import { withRouter , Switch ,Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import ConvoDiv from './message_field/ConvoDiv.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path='/' component={NavBar}/>
          <Route exact path='/messages' component={ConvoDiv}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
