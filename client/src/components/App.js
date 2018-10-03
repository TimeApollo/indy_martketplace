import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import BannerComponent from "./BannerComponent.jsx";
import NavBar from "./NavBar.jsx";
import MessageList from "./messages/MessageList.jsx";
import HomePage from "./homepage/HomePage.jsx";
import UserProfilePageContainer from "./profile/UserProfilePageContainer.jsx"
import UploadForm from "./profile/PostNewImagePage.jsx";
import EditProfilePage from "./profile/EditProfilePage.jsx";
import MainPage from "./mainpage/MainPage.jsx";
import ViewArtistProfile from "./viewartist/ViewArtistProfile";
import AboutPage from "./profile/AboutPage.jsx"
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
          <Route exact path="/artwork" component={MainPage} />
          <Route exact path="/profile" component={UserProfilePageContainer} />
          <Route exact path="/editProfile" component={EditProfilePage} />
          <Route exact path="/artist" component={ViewArtistProfile} />
          <Route exact path="/about" component={AboutPage}/>
          {/* <Route exact path="/about" component={AboutPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
