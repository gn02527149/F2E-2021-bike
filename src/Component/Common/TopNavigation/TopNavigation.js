import React, { useCallback, useState } from "react";
import { useHistory } from 'react-router-dom';


import "./TopNavigation.scss";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const history = useHistory();
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div id="top-navigation">
      <div className="inner-container">
        <ul>
          <Link className="logo select" to="/F2E-2021-bike/">
            <div className="logoBox">
              <div className="logoImg"></div>
              <p>Bike Fun！自行車旅遊網</p>
            </div>
          </Link>
          <Link className="not-allowed" to={`/F2E-2021-bike/:searchKind/search-result`}>
            最新消息
          </Link>
          <Link className="not-allowed" to="/">
            探索路線
          </Link>
          <Link className="not-allowed" to="/">
            尋找站點
          </Link>
          <Link className="not-allowed" to="/">
            常見問題
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopNavigation;
