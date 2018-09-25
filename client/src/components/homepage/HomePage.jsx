import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import SingleGallery from "./SingleGallery.jsx";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <SingleGallery />
        <LoginForm />
        <RegisterForm />
      </React.Fragment>
    );
  }
}

export default HomePage;
