import React, { useEffect } from "react";
import { gsap } from "gsap";

const FifthSection = () => {
  useEffect(() => {
    let fifth = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth_section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
    fifth
      .fromTo(
        ".forth_section",
        {
          height: "100%",
        },
        {
          height: "0%",
        }
      )
      .to(
        ".bg-green",
        {
          autoAlpha: 1,
        },
        "-=.5"
      );
  }, []);
  return (
    <div className="vh-200 overflow-hidden fifth_section ">
      <div className="vh-100 bg-green"></div>
      FifthSection
    </div>
  );
};

export default FifthSection;
