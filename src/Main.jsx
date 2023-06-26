import React from "react";
import Hero from "./components/Hero";
import Business from "./components/Business";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Partners from "./components/partners/Partners";
import Crm from "./components/Crm";
import Meeting from "./components/Meeting";
import largeArrow from "./assets/images/svg/largeArrow.svg";
import PreLoader from "./components/PreLoader";
import { useEffect, useState } from "react";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.classList.add("not-scroll-before-loading");
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("not-scroll-before-loading");
    }, 3100);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 576) {
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {<PreLoader loading={loading} />}
      <Hero />
      <Business />
      <AboutUs />
      <Timeline />
      <Partners />
      <div className="bg_light_white">
        <Crm />
        <Meeting />
      </div>
      <div className="w-100 overflow-hidden">
        <img
          alt="largeArrow"
          src={largeArrow}
          id="hero-large-arrow"
          className="position-fixed z-0 pointer-events-none d-none d-lg-block"
        />
      </div>
    </>
  );
};

export default Main;
