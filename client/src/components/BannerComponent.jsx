import React from "react";
class BannerComponent extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100vw"
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgb(33, 38, 34)"
          }}
        >
          <img
            className="banner"
            src={require("../images/logo2.png")}
            alt="logo"
            style={{ backgroundColor: "black" }}
            // style={{marginBottom: "18em"}}
          />
        </nav>
      </div>
    );
  }
}

export default BannerComponent;
