import React from "react";

const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div id="panel__devices" className="panel__devices"></div>
        <div className="panel__editor"></div>
        <div className="panel__basic-actions"></div>
      </div>
    </nav>
  );
};

export default TopBar;
