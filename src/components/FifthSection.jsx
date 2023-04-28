import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import icon1 from "../assets/images/png/roadmap_small_icon1.png";
import icon2 from "../assets/images/png/roadmap_icon2.png";

const FifthSection = () => {
  const [leftMargin, setLeftMargin] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      setLeftMargin(containerRef.current.getBoundingClientRect().left);
    }

    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setLeftMargin(containerRef.current.getBoundingClientRect().left);
      }
    });
  }, [leftMargin]);
  useEffect(() => {
    let fifth2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth_main",
        start: "top 5%",
        end: "bottom top",
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
        pinSpacing: true,
        markers: true,
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
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "-=.5"
      )
      .fromTo(
        ".value_1",
        {
          paddingLeft: "0px",
        },
        {
          paddingLeft: "800px",
        },
        "+=1"
      )
      .fromTo(
        ".div_roadmap",
        {
          xPercent: 0,
        },
        {
          xPercent: -50,
        }
      )
      .fromTo(
        ".value_1",
        {
          paddingLeft: "800px",
        },
        {
          paddingLeft: "1600px",
        }
      );
  }, []);
  return (
    <>
      <div className="container" ref={containerRef}></div>
      <div className="fifth_main">
        <div className="vh-100 overflow-hidden fifth_section ">
          <div className="bg-green vh-100 position-absolute w-100"></div>
          <div className="vh-100 d-flex flex-column justify-content-center z_index2 position-relative div_roadmap">
            <div className="d-flex">
              <div
                className="div_1 custom_width"
                style={{ marginLeft: `${leftMargin + 16}px` }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                velit id eligendi possimus. Consequuntur officia suscipit
                molestiae earum, quis placeat quo perspiciatis beatae rem veniam
                corporis eius ipsa, repellendus necessitatibus!
              </div>
              <div className="div_1 custom_width">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                velit id eligendi possimus. Consequuntur officia suscipit
                molestiae earum, quis placeat quo perspiciatis beatae rem veniam
                corporis eius ipsa, repellendus necessitatibus!
              </div>
              <div className="div_1 custom_width">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                velit id eligendi possimus. Consequuntur officia suscipit
                molestiae earum, quis placeat quo perspiciatis beatae rem veniam
                corporis eius ipsa, repellendus necessitatibus!
              </div>
            </div>
            <span
              style={{ marginLeft: `${leftMargin - 16}px` }}
              className="d-inline-block"
            >
              <img className="small_icon_1 value_1" src={icon1} alt="icon1" />
            </span>
            <span
              style={{ marginLeft: `${leftMargin + 16}px` }}
              className="d-inline-block"
            >
              <img className="small_icon_2 value_1" src={icon2} alt="icon2" />
            </span>
            <div
              className="line mt-5"
              style={{ marginLeft: `${leftMargin + 16}px` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
