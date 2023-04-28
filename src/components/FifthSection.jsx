import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
    <>
      <div className="container" ref={containerRef}></div>
      <div className="fifth_main">
        <div className="vh-200 overflow-hidden fifth_section ">
          <div className="bg-green vh-100 position-absolute w-100"></div>
          <div className="vh-100 d-flex flex-column justify-content-center z_index2 position-relative">
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
