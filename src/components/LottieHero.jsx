import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import lottieurl from "../assets/lotties/hero-icon.json";
import { gsap } from "gsap";

const LottieHero = () => {
  const [lottieicon, setlottieicon] = useState(false);
  const heroscrollicon = () => {
    if (window.innerWidth > 2000) {
      gsap.to(window, { duration: 0.3, scrollTo: 1000, ease: "linear" });
    }
    if (window.innerWidth > 1600 && window.innerHeight <= 1090) {
      gsap.to(window, { duration: 0.3, scrollTo: 600, ease: "linear" });
    }
    if (window.innerWidth < 1599) {
      gsap.to(window, { duration: 0.3, scrollTo: 500, ease: "linear" });
    }
    if (window.innerWidth < 900) {
      gsap.to(window, { duration: 0.3, scrollTo: 800, ease: "linear" });
    }
    if (window.innerWidth < 500) {
      gsap.to(window, { duration: 0.3, scrollTo: 500, ease: "linear" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 300) {
        setlottieicon(true);
      } else {
        setlottieicon(false);
      }
    });
  }, []);
  return (
    <>
      {lottieicon && (
        <div
          className="position-absolute hero_lottie_icon d-none d-sm-block"
          onClick={() => heroscrollicon()}
        >
          <Lottie animationData={lottieurl} loop={true} play />
        </div>
      )}
    </>
  );
};

export default LottieHero;
