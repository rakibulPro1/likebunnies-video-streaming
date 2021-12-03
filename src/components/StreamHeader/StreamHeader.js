import React from "react";
import "./StreamHeader.css";
import AvatarImg from "../../assets/images/Avatar.png";
import SubscribeFullIcon from "../../assets/icons/SubscribeFullIcon";
import WatcherIcon from "../../assets/icons/WatcherIcon";
import HeartFullIcon from "../../assets/icons/HeartFullIcon";

const StreamHeader = () => {
  return (
    <header className="py-4">
      <div className="d-flex px-4">
        <div className="me-2">
          <img src={AvatarImg} width="40px" alt="" className="img-fluid" />
        </div>
        <div className="d-flex flex-column">
          <div>
            <h3>ShiuJulia's room: 10k and Chat! #sendMeGifts</h3>
          </div>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex">
              <div className="d-flex align-items-center me-3 ">
                <WatcherIcon />
                <p className="title-text mb-0 mx-1">458K</p>
              </div>
              <div className="d-flex align-items-center mx-3 ">
                <HeartFullIcon />
                <p className="title-text mb-0 mx-1">1.2K</p>
              </div>
              <div className="d-flex align-items-center mx-3">
                <SubscribeFullIcon />
                <p className="title-text mb-0 mx-1">250</p>
              </div>
            </div>
            <div className="d-flex">
              <button className="favourite-btn" style={{ color: "gray" }}>
                Favourites
              </button>
              <button className="exit-btn" style={{ color: "gray" }}>
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StreamHeader;
