import React, { useEffect, useState } from "react";

import Logo from "../../../assets/images/logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header-container">
        <div className="header-Logo">
          <img src={Logo} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
