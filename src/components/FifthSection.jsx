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
        ".fifth_section",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".forth_section",
        {
          height: "100%",
        },
        {
          height: "0%",
        }
      );
  }, []);
  return (
    <div className="vh-200 overflow-hidden fifth_section bg-green">
      <div className="vh-100 position-relative">FifthSection</div>
    </div>
  );
};

export default FifthSection;
