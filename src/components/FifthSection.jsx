import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import icon1 from "../assets/images/svg/roadmap_side_icon.svg";
import icon2 from "../assets/images/png/roadmap_icon2.png";

const FifthSection = () => {
  const [leftMargin, setLeftMargin] = useState(0);
  const [leftSpacing, setLeftSpacing] = useState(0);
  const [leftSpacing2, setLeftSpacing2] = useState(0);
  const containerRef = useRef(null);
  const secondText = useRef(null);
  const secondText2 = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      setLeftMargin(containerRef.current.getBoundingClientRect().left);
    }
    if (secondText.current) {
      setLeftSpacing(secondText.current.getBoundingClientRect().left);
    }
    if (secondText2.current) {
      setLeftSpacing2(secondText2.current.getBoundingClientRect().left);
    }

    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setLeftMargin(containerRef.current.getBoundingClientRect().left);
      }
      if (secondText.current) {
        setLeftSpacing(secondText.current.getBoundingClientRect().left);
      }
      if (secondText2.current) {
        setLeftSpacing2(secondText2.current.getBoundingClientRect().left);
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
          left: "-100vw",
        },
        {
          left: "-85vw",
        },
        "+=1"
      )
      .fromTo(
        ".div_2",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .fromTo(
        ".div_1",
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
        },
        "-=.8"
      )

      .fromTo(
        ".value_1",
        {
          left: "-85vw",
        },
        {
          left: "-65vw",
        }
      )
      .fromTo(
        ".div_3",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .fromTo(
        ".div_2",
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
        },
        "-=.8"
      )
      .fromTo(
        ".value_1",
        {
          left: "-65vw",
        },
        {
          left: "-45vw",
        }
      )
      .fromTo(
        ".div_4",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .fromTo(
        ".div_3",
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
        },
        "-=.8"
      );
  }, []);
  return (
    <>
      <div className="container" ref={containerRef}></div>
      <div className="fifth_main">
        <div className="vh-100 overflow-hidden fifth_section">
          <div className="bg-green vh-100 position-absolute w-100"></div>
          <div className="vh-100 d-flex flex-column justify-content-center z_index2 position-relative  ">
            <div className="d-flex">
              <div
                className="div_1 bg-danger"
                style={{ marginLeft: `${leftMargin + 16}px` }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                velit id eligendi possimus. Consequuntur officia suscipit
                molestiae earum, quis placeat quo perspiciatis beatae rem veniam
                corporis eius ipsa, repellendus necessitatibus!
              </div>

              <div
                className="div_2 position-absolute"
                style={{ left: `${leftSpacing - 10}px` }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                velit id eligendi possimus. Consequuntur officia suscipit
                molestiae earum, quis placeat quo perspiciatis beatae rem veniam
                corporis eius ipsa, repellendus necessitatibus!
              </div>
              <div
                className="div_3 position-absolute"
                style={{ left: `${leftSpacing2 - 10}px` }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                velit id eligendi possimus. Consequuntur officia suscipit
                molestiae earum, quis placeat quo perspiciatis beatae rem veniam
                corporis eius ipsa, repellendus necessitatibus!
              </div>
              <div className="div_4 position-absolute">
                <h1>Cake Icon</h1>
              </div>
            </div>
            <span
              style={{ marginLeft: `${leftMargin - 16}px` }}
              className="d-inline-block"
            >
              <img className="small_icon_1 value_1" src={icon1} alt="icon1" />
            </span>

            {/* <div
              className="line mt-5"
              style={{ marginLeft: `${leftMargin + 16}px` }}
            ></div> */}
            <div className="container mt-5">
              <div className="d-flex ">
                <div className="col-4 line_with_dot line_first "></div>
                <div ref={secondText} className="col-4 line_with_dot "></div>
                <div ref={secondText2} className="col-4 line_with_dot "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
