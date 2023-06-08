import React from "react";
import Lottie from "react-lottie-player";
import preloaderJson from "../assets/lotties/preloader.json";

const PreLoader = ({ loading }) => {
  return (
    <>
      {loading ? (
        <div
          className="loader_fullscreen"
        >
          <Lottie
            loop
            animationData={preloaderJson}
            play
            className="preloader_lottie"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PreLoader;
