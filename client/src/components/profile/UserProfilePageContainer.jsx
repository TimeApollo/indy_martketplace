import React, { Component } from "react";
import { connect } from "react-redux";

import ArtistProfilePage from "./ArtistProfilePage.jsx";
import BuyerProfilePage from "./BuyerProfilePage.jsx"

class UserProfilePageContainer extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isArtist ? <ArtistProfilePage/> : <BuyerProfilePage/>}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  isArtist: auth.user.isArtist
});

export default connect( mapStateToProps , undefined )(UserProfilePageContainer)