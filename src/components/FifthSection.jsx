import React, { useEffect } from "react";
import { gsap } from "gsap";

const FifthSection = () => {
  useEffect(() => {
    let fifth2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth_main",
        start: "top -80%",
        end: "bottom top",
        markers: true,
        toggleActions: "play none none reverse",
      },
    });
    fifth2.fromTo(
      ".bg-green",
      { scale: 0 },
      {
        scale: 1,
      }
    );
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
    <div className="fifth_main">
      <div className="vh-200 overflow-hidden fifth_section ">
        <div className="bg-green vh-100 position-absolute w-100"></div>
        <div className="vh-100 position-relative">FifthSection</div>
      </div>
    </div>
  );
};

export default FifthSection;
