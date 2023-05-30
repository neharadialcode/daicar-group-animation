import React from "react";
import preloaderImg from "../assets/images/svg/preloader-img.svg";

const PreLoader = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div
          className={`loader_fullscreen ${loading ? "" : "preloader_reverse"}`}
        >
          <img
            className="loader-img bounce-out"
            src={preloaderImg}
            alt="preloaderImg"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PreLoader;
