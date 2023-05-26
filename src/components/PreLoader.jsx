import React from "react";
import preloaderImg from "../assets/images/svg/preloader-img.svg";

const PreLoader = ({ loading }) => {
  return (
    <>
      <div
        className={`loader_fullscreen ${loading ? "" : "preloader_reverse"}`}
      >
        <img className="loader-img" src={preloaderImg} alt="preloaderImg" />
        {/* <h1 className="p-5 text-ceneter bg-danger">Hello</h1> */}
      </div>
    </>
  );
};

export default PreLoader;
