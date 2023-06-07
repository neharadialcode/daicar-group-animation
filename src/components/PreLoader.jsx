import React from "react";
import Lottie from "react-lottie-player";
import preloaderJson from "../assets/lotties/preloader.json";

const PreLoader = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div
          className={`loader_fullscreen ${loading ? "" : "preloader_reverse"}`}
        >
          <Lottie loop animationData={preloaderJson} play />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PreLoader;
