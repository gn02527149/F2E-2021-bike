import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

// import defaultCardPicture from "../../assets/images/view/unsplash_5Lw1U5BIumE.png";
// import LocationOnOutlinedIcon from "../../assets/images/icons/Vector.png";
// import TimeIcon from "../../assets/images/icons/bx_bx-time.png";
// import yearPhoto from "../../assets/images/other/unsplash_gdTxVSAE5sk.png";
// import artPhoto from "../../assets/images/other/unsplash_8fb3UBhNqc8.png";
// import galaPhoto from "../../assets/images/other/unsplash_AlSlE8IAjZo.png";
// import otherPhoto from "../../assets/images/other/unsplash_Wj1D-qiOseE.png";


import requestAPI, { requesScenicSpot } from "../../controller/apiManager";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container inner-container">
        <div className="container hot-container">
          <div className="title hot">
            {/* <span>熱門景點</span>
            <p>台灣的各個美景，都美不勝收。<br/> 等你一同來發現這座寶島的奧妙！</p> */}
          </div>
          <div className="card-container">
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
