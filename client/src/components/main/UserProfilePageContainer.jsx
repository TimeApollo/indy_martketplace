import React, { Component } from "react";

import ArtistProfilePage from "./ArtistProfilePage.jsx";
import BuyerProfilePage from "./BuyerProfilePage.jsx"

class UserProfilePageContainer extends Component {
  render() {
    return (
      {this.props.isArtist ? <ArtistProfilePage/> : <BuyerProfilePage/>}
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  isArtist: auth.user.isArtist
});

export default connect( mapStateToProps , undefined )(UserProfilePageContainer)