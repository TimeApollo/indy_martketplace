import React from 'react'
class BannerComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100vw"
        }}
      >
        <nav style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="banner"
            src={require("../images/logo.png")}
            alt="logo"
            // style={{marginBottom: "18em"}}
          />
        </nav>
      </div>
    );
  }
}

export default (BannerComponent)