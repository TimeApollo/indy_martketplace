import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import BannerComponent from "./BannerComponent.jsx";
import NavBar from "./NavBar.jsx";
import RegisterForm from "./homepage/RegisterForm.jsx";
import MessageList from "./messages/MessageList.jsx";
import HomePage from "./homepage/HomePage.jsx";
import ArtistProfilePage from "./main/ArtistProfilePage.jsx";
import UploadForm from "./main/PostNewImagePage.jsx";
import EditProfilePage from "./main/EditProfilePage.jsx"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BannerComponent/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/messages" component={MessageList} />
          <Route exact path="/upload" component={UploadForm} />
          {/* <Route exact path="/profile"  */}
          <Route exact path="/profile" component={ArtistProfilePage} />
          {/* <Route exact path="/editProfile" component={EditProfilePage} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
